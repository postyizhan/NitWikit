

async function fetchAds(serverUrl) {
    try {
        const response = await fetch(serverUrl);
        if (!response.ok) throw new Error('广告数据加载失败');
        return await response.json();
    } catch (error) {
        console.error('[广告插件] 数据获取失败:', error);
        return [];
    }
}

function createAdElement({ name, url }) {
    const adLink = document.createElement('a');
    adLink.href = url;
    adLink.textContent = name;
    adLink.className = 'navbar__item navbar__link ad-item';
    adLink.target = '_blank';
    adLink.rel = 'noopener noreferrer';
    return adLink;
}

function injectAds(ads) {
    const navbarRight = document.querySelector('.navbar__items--right');
    if (!navbarRight) return;

    // 清除旧广告
    navbarRight.querySelectorAll('.ad-item').forEach(el => el.remove());

    // 插入新广告（反向保证顺序）
    ads.reverse().forEach(ad => {
        navbarRight.prepend(createAdElement(ad));
    });
}

const CONFIG = {
    serverUrl: 'https://ad-api.8aka.org/ads',
    autoRefresh: true
};

export function onRouteDidUpdate() {
    fetchAds(CONFIG.serverUrl)
        .then(ads => {
            if (ads?.length > 0) injectAds(ads);
        })
        .catch(e => console.warn('[广告插件] 渲染失败:', e));
}

// 可选：初始化立即加载
if (typeof window !== 'undefined') {
    setTimeout(() => onRouteDidUpdate(),t1000); // 延迟确保DOM加载完成
}