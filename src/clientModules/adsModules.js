import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

// 缓存和配置
const CONFIG = {
    serverUrl: 'https://ad-api.8aka.org/ads',
    cacheKey: 'adCache',
    cacheDuration: 5 * 60 * 1000, // 5分钟缓存
    mobileBreakpoint: 996, // 匹配Docusaurus的响应式断点
    maxMobileAds: 2 // 移动端最多显示广告数
};

// 带缓存的广告获取
async function fetchAds() {
    try {
        const cachedData = JSON.parse(sessionStorage.getItem(CONFIG.cacheKey));
        if (cachedData && Date.now() - cachedData.timestamp < CONFIG.cacheDuration) {
            return cachedData.ads;
        }

        const response = await fetch(CONFIG.serverUrl);
        if (!response.ok) throw new Error('广告数据加载失败');
        const ads = await response.json();

        sessionStorage.setItem(CONFIG.cacheKey, JSON.stringify({
            timestamp: Date.now(),
            ads
        }));
        return ads;
    } catch (error) {
        console.error('[广告插件] 数据获取失败:', error);
        return [];
    }
}

// 创建响应式广告元素
function createAdElement(ad, isMobile) {
    const adLink = document.createElement('a');
    adLink.href = ad.url;
    adLink.textContent = ad.name;
    adLink.className = `ad-item ${isMobile ? 'ad-item-mobile' : 'ad-item-desktop'}`;
    adLink.target = '_blank';
    adLink.rel = 'noopener noreferrer';

    // 移动端添加触摸反馈
    if (isMobile) {
        adLink.addEventListener('touchstart', () => {
            adLink.style.backgroundColor = '#f5f5f5';
        });
        adLink.addEventListener('touchend', () => {
            adLink.style.backgroundColor = '';
        });
    }
    return adLink;
}

// 响应式广告注入
function injectAds(ads) {
    const isMobile = window.matchMedia(`(max-width: ${CONFIG.mobileBreakpoint}px)`).matches;
    const filteredAds = isMobile ? ads.slice(0, CONFIG.maxMobileAds) : ads;

    // 桌面端容器
    const desktopContainer = document.querySelector('.navbar__items--right');

    // 移动端容器（侧边栏底部）
    const mobileContainer = document.querySelector('.navbar-sidebar__items'); // 修改后的选择器

    // 清除旧广告
    [desktopContainer, mobileContainer].forEach(container => {
        container?.querySelectorAll('.ad-item').forEach(el => el.remove());
    });

    // 创建新元素
    const elements = filteredAds.map(ad => ({
        desktop: createAdElement(ad, false),
        mobile: createAdElement(ad, true)
    }));

    // 桌面端处理（保持不变）
    if (desktopContainer) {
        elements.reverse().forEach(({ desktop }) => {
            desktopContainer.prepend(desktop);
        });
    }

    // 移动端处理（添加到侧边栏底部）
    if (isMobile && mobileContainer) {
        const wrapper = document.createElement('div');
        wrapper.className = 'mobile-ad-wrapper';

        elements.forEach(({ mobile }) => {
            wrapper.appendChild(mobile);
        });

        // 插入到侧边栏底部
        mobileContainer.appendChild(wrapper);
    }
}

// 优化后的路由处理（带防抖）
let pendingRequest;
export function onRouteDidUpdate() {
    if (!ExecutionEnvironment.canUseDOM) return;

    clearTimeout(pendingRequest);
    pendingRequest = setTimeout(async () => {
        try {
            const ads = await fetchAds();
            if (ads?.length) {
                requestAnimationFrame(() => injectAds(ads));
            }
        } catch (e) {
            console.warn('[广告插件] 渲染失败:', e);
        }
    }, 300);
}

// 初始化时确保容器存在
if (typeof window !== 'undefined') {
    const observer = new MutationObserver(() => {
        if (document.querySelector('.navbar__items--right, .navbar-sidebar__content')) {
            observer.disconnect();
            onRouteDidUpdate();
        }
    });

    if (!document.querySelector('.navbar__items--right')) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    } else {
        onRouteDidUpdate();
    }
    // 响应窗口尺寸变化
    window.addEventListener('resize', () => {
        if (window.adResizeTimer) clearTimeout(adResizeTimer);
        window.adResizeTimer = setTimeout(() => {
            injectAds(JSON.parse(sessionStorage.getItem(CONFIG.cacheKey))?.ads || []);
        }, 200);
    });
}


