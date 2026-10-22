(() => {
    'use strict';

    const STORE_URL = 'https://chromewebstore.google.com/detail/%E6%91%98%E6%98%9F%E5%8D%A1%E7%89%87/begimcgdknolpegbnajppnilboonmfgf';
    const SITE_URL = 'https://starcard.foxlaoy.com/';
    const DATE = '2026.10.22';

    const LAYOUTS = [
        {
            key: 'default',
            name: '素白',
            tagline: '干净、通用，适合大多数摘录',
            desc: '最克制的一版。白底、细边、浅灰引文框，不抢文字的风头。适合大多数网页摘录，也适合做读书笔记的封面。',
            points: ['白底细边，适合绝大多数网页', '引文框与来源信息层次清晰', '长文、短文都不会显得拥挤'],
            quote: '阅读不是把一本书从头到尾翻完，而是在某个句子上停下来，让它和自己发生一点关系。那些被留下的句子，最后会变成我们看世界的方式。'
        },
        {
            key: 'modern',
            name: '墨影',
            tagline: '深色与金色，适合观点与夜读',
            desc: '深色底、金色来源与左侧书脊。像一本合上的夜读书，适合观点、评论和想被认真读的句子。',
            points: ['深色版面，夜间阅读友好', '左侧书脊收纳日期与二维码', '金色来源信息，观点感更强'],
            quote: '阅读不是把一本书从头到尾翻完，而是在某个句子上停下来，让它和自己发生一点关系。那些被留下的句子，最后会变成我们看世界的方式。'
        },
        {
            key: 'classic',
            name: '书卷',
            tagline: '宋体与纸张，适合长段阅读',
            desc: '宋体、米色纸面与左侧来源栏。留白更宽，适合长段落和阅读类文章。',
            points: ['宋体 + 米色纸面', '左侧来源栏，像一本书的扉页', '适合长段落与阅读笔记'],
            quote: '阅读不是把一本书从头到尾翻完，而是在某个句子上停下来，让它和自己发生一点关系。'
        },
        {
            key: 'note',
            name: '青笺',
            tagline: '浅绿便笺，适合日常记录',
            desc: '浅绿便笺的轻量感。头部、来源与二维码排成一行，正文落在下方，适合日常记录与随手分享。',
            points: ['浅绿便签底色', '来源、日期与二维码收在顶部', '正文完整，适合随手记录'],
            quote: '阅读不是把一本书从头到尾翻完，而是在某个句子上停下来，让它和自己发生一点关系。那些被留下的句子，最后会变成我们看世界的方式。'
        },
        {
            key: 'qingye',
            name: '留白',
            tagline: '克制的白，让文字自己说话',
            desc: '四款新版式之一。几乎只有文字和一条细绿线，把注意力全部留给句子。',
            points: ['极简白底 + 宋体', '一条细绿线作为页眉', '短句和大段留白'],
            quote: '阅读不是把一本书从头到尾翻完，而是在某个句子上停下来，让它和自己发生一点关系。'
        },
        {
            key: 'yedu',
            name: '夜航',
            tagline: '墨绿与荧光，适合犀利句子',
            desc: '墨绿底与荧光绿重点。第一段会加粗并带左侧竖线，适合短而有力的摘录。',
            points: ['墨绿底 + 荧光绿强调', '首段加粗并带竖线', '适合犀利、短促的句子'],
            quote: '阅读不是把一本书从头到尾翻完，而是在某个句子上停下来，让它和自己发生一点关系。'
        },
        {
            key: 'signal',
            name: '电光',
            tagline: '荧光黄与大字，适合金句',
            desc: '荧光黄底、超大字标题。开头一句会被放大，适合金句、宣言和社交平台分享。',
            points: ['荧光黄底 + 超大字', '开头一句自动放大', '底部白色信息条', '适合社交平台传播'],
            quote: '阅读不是把一本书从头到尾翻完，而是在某个句子上停下来，让它和自己发生一点关系。'
        },
        {
            key: 'manuscript',
            name: '格物',
            tagline: '稿纸、行号与标记，适合拆解文本',
            desc: '稿纸网格、行号、荧光笔与粉色标记。支持高亮、下划线和行号开关，适合拆解一段文字。',
            points: ['14px 稿纸网格', '自动行号（可关闭）', '高亮与下划线会绘进图片', '适合拆解、批注和教学'],
            quote: '阅读不是把一本书从头到尾翻完，而是在某个句子上停下来，让它和自己发生一点关系。'
        }
    ];

    const TITLE = '把阅读留在纸上';
    const SOURCE = '摘星卡片 · 使用手记';

    const sourceHtml = () => `
        <div class="source">
            <strong>${TITLE}</strong>
            <span>${SOURCE}</span>
            <time>${DATE}</time>
        </div>`;

    const qrHtml = () => `
        <div class="qr-box">
            <span class="qr" data-qr></span>
            <small>扫码阅读原文</small>
        </div>`;

    const railQrHtml = () => `<span class="qr" data-qr></span>`;

    function cardMarkup(layout) {
        const data = LAYOUTS.find(item => item.key === layout) || LAYOUTS[0];
        const quote = data.quote;

        switch (layout) {
            case 'modern':
                return `
                    <article class="card card--modern">
                        <aside class="card__rail">
                            <span class="rail-star" aria-hidden="true">✦</span>
                            ${railQrHtml()}
                            <span class="rail-label">摘星卡片</span>
                        </aside>
                        <div class="card__main">
                            <div class="card__head">
                                <span class="card__brand">摘星卡片</span>
                                <time>${DATE}</time>
                            </div>
                            <blockquote class="card__quote">${quote}</blockquote>
                            ${sourceHtml()}
                        </div>
                    </article>`;

            case 'classic':
                return `
                    <article class="card card--classic">
                        <aside class="classic__aside">
                            <span class="card__brand">摘星卡片</span>
                            ${sourceHtml()}
                            ${qrHtml()}
                        </aside>
                        <blockquote class="card__quote">${quote}</blockquote>
                    </article>`;

            case 'note':
                return `
                    <article class="card card--note">
                        <div class="card__head">
                            <span class="card__brand"><i aria-hidden="true">✦</i>摘星卡片</span>
                            <time>${DATE}</time>
                        </div>
                        <div class="card__row">
                            ${sourceHtml()}
                            ${qrHtml()}
                        </div>
                        <blockquote class="card__quote">${quote}</blockquote>
                    </article>`;

            case 'qingye':
                return `
                    <article class="card card--qingye">
                        <div class="qingye__head"><span>摘星卡片</span><i aria-hidden="true"></i></div>
                        <blockquote class="card__quote">${quote}</blockquote>
                        <div class="card__bottom">
                            ${sourceHtml()}
                            ${qrHtml()}
                        </div>
                    </article>`;

            case 'yedu':
                return `
                    <article class="card card--yedu">
                        <div class="card__head">
                            <span class="card__brand">摘星卡片</span>
                            <time>${DATE}</time>
                        </div>
                        <blockquote class="card__quote">
                            <p class="lead">阅读不是把一本书从头到尾翻完，而是在某个句子上停下来。</p>
                            <p>让它和自己发生一点关系。那些被留下的句子，最后会变成我们看世界的方式。</p>
                        </blockquote>
                        <div class="card__bottom">
                            ${sourceHtml()}
                            ${qrHtml()}
                        </div>
                    </article>`;

            case 'signal':
                return `
                    <article class="card card--signal">
                        <div class="card__head">
                            <span class="card__brand">摘星卡片</span>
                            <time>${DATE}</time>
                        </div>
                        <blockquote class="card__quote">
                            <strong>在某个句子上停下来</strong>
                            <span>让它和自己发生一点关系。</span>
                        </blockquote>
                        <div class="signal__bottom">
                            ${sourceHtml()}
                            ${qrHtml()}
                        </div>
                    </article>`;

            case 'manuscript':
                return `
                    <article class="card card--manuscript">
                        <div class="card__head">
                            <span class="card__brand">摘星卡片</span>
                            <i class="head-rule" aria-hidden="true"></i>
                            <time>${DATE}</time>
                        </div>
                        <blockquote class="card__quote">
                            <span class="line-nums" aria-hidden="true"></span>
                            <div class="manuscript-text">
                                <p>阅读不是把一本书从头到尾翻完，而是在某个句子上<mark>停下来<i class="caret" aria-hidden="true"></i></mark>，让它和自己<u>发生一点关系</u>。那些被留下的句子，最后会变成我们看世界的方式。</p>
                            </div>
                        </blockquote>
                        <div class="card__bottom">
                            ${sourceHtml()}
                            ${qrHtml()}
                        </div>
                    </article>`;

            default:
                return `
                    <article class="card card--default">
                        <div class="card__head">
                            <span class="card__brand"><i aria-hidden="true">✦</i>摘星卡片</span>
                            <time>${DATE}</time>
                        </div>
                        <blockquote class="card__quote">${quote}</blockquote>
                        <div class="card__bottom">
                            ${sourceHtml()}
                            ${qrHtml()}
                        </div>
                    </article>`;
        }
    }

    /* ------------------------------------------------------------------ */
    /* 卡片网格                                                             */
    /* ------------------------------------------------------------------ */

    const grid = document.getElementById('layoutGrid');

    if (grid) {
        grid.innerHTML = LAYOUTS.map(layout => `
            <article class="layout-tile">
                <div class="layout-tile__frame">
                    <div class="layout-tile__card">${cardMarkup(layout.key)}</div>
                    <span class="layout-tile__zoom" aria-hidden="true">查看大图</span>
                </div>
                <div class="layout-tile__meta">
                    <strong>${layout.name}</strong>
                    <span>${layout.tagline}</span>
                </div>
                <button class="layout-tile__hit" type="button" data-layout="${layout.key}" aria-label="查看${layout.name}版式大图"></button>
            </article>
        `).join('');

        grid.addEventListener('click', event => {
            const trigger = event.target.closest('[data-layout]');
            if (!trigger) return;
            openLayout(trigger.dataset.layout);
        });
    }

    /* ------------------------------------------------------------------ */
    /* 二维码                                                               */
    /* ------------------------------------------------------------------ */

    let qrSource = '';

    function createQrSource() {
        if (!window.QRCode) return;

        const holder = document.createElement('div');
        holder.setAttribute('aria-hidden', 'true');
        holder.style.cssText = 'position:fixed;left:-10000px;top:0;width:256px;height:256px;';
        document.body.appendChild(holder);

        try {
            new window.QRCode(holder, {
                text: SITE_URL,
                width: 256,
                height: 256,
                colorDark: '#111111',
                colorLight: '#ffffff',
                correctLevel: window.QRCode.CorrectLevel.H
            });

            const image = holder.querySelector('img');
            const canvas = holder.querySelector('canvas');

            if (image && image.src && image.src.startsWith('data:image')) {
                qrSource = image.src;
            } else if (canvas) {
                qrSource = canvas.toDataURL('image/png');
            }
        } catch (error) {
            console.warn('摘星卡片：二维码生成失败', error);
        } finally {
            holder.remove();
        }
    }

    function applyQr(root = document) {
        if (!qrSource) return;

        root.querySelectorAll('.qr').forEach(element => {
            if (element.dataset.qrReady === 'true') return;
            const image = document.createElement('img');
            image.src = qrSource;
            image.alt = '';
            element.replaceChildren(image);
            element.dataset.qrReady = 'true';
        });
    }

    function renderLineNumbers(root = document) {
        root.querySelectorAll('.card--manuscript').forEach(card => {
            const text = card.querySelector('.manuscript-text');
            const numbers = card.querySelector('.line-nums');
            if (!text || !numbers) return;

            const lineHeight = parseFloat(window.getComputedStyle(text).lineHeight);
            if (!lineHeight) return;

            const count = Math.max(1, Math.round(text.getBoundingClientRect().height / lineHeight));
            const fragment = document.createDocumentFragment();

            for (let index = 0; index < count; index += 1) {
                const number = document.createElement('span');
                number.textContent = String(index + 1).padStart(2, '0');
                number.style.top = `${index * lineHeight}px`;
                fragment.appendChild(number);
            }

            numbers.replaceChildren(fragment);
        });
    }

    createQrSource();
    applyQr();
    renderLineNumbers();

    /* ------------------------------------------------------------------ */
    /* 版式预览弹窗                                                         */
    /* ------------------------------------------------------------------ */

    const dialog = document.getElementById('layoutDialog');
    const dialogPreview = document.getElementById('dialogPreview');
    const dialogTitle = document.getElementById('dialogTitle');
    const dialogDesc = document.getElementById('dialogDesc');
    const dialogPoints = document.getElementById('dialogPoints');
    const dialogClose = document.getElementById('dialogClose');
    const dialogNext = document.getElementById('dialogNext');
    const openDefault = document.getElementById('openDefaultLayout');

    let currentIndex = 0;

    function fillDialog(index) {
        currentIndex = (index + LAYOUTS.length) % LAYOUTS.length;
        const layout = LAYOUTS[currentIndex];

        dialogTitle.textContent = layout.name;
        dialogDesc.textContent = layout.desc;
        dialogPoints.innerHTML = layout.points.map(point => `<li>${point}</li>`).join('');
        dialogPreview.innerHTML = cardMarkup(layout.key);
        applyQr(dialogPreview);
        window.requestAnimationFrame(() => renderLineNumbers(dialogPreview));
    }

    function openLayout(key) {
        const index = LAYOUTS.findIndex(layout => layout.key === key);
        fillDialog(index < 0 ? 0 : index);

        if (typeof dialog.showModal === 'function' && !dialog.open) {
            dialog.showModal();
        } else if (!dialog.open) {
            dialog.setAttribute('open', '');
        }

        window.requestAnimationFrame(() => renderLineNumbers(dialogPreview));
        document.body.classList.add('dialog-open');
    }

    function closeDialog() {
        if (typeof dialog.close === 'function' && dialog.open) {
            dialog.close();
        } else {
            dialog.removeAttribute('open');
            document.body.classList.remove('dialog-open');
        }
    }

    if (dialog) {
        dialogClose.addEventListener('click', closeDialog);
        dialogNext.addEventListener('click', () => fillDialog(currentIndex + 1));
        dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
        dialog.addEventListener('cancel', () => document.body.classList.remove('dialog-open'));
        dialog.addEventListener('click', event => {
            if (event.target === dialog) closeDialog();
        });
    }

    if (openDefault) {
        openDefault.addEventListener('click', () => openLayout('default'));
    }

    /* ------------------------------------------------------------------ */
    /* 导航                                                                 */
    /* ------------------------------------------------------------------ */

    const header = document.getElementById('siteHeader');
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');

    function onScroll() {
        if (!header) return;
        header.classList.toggle('is-scrolled', window.scrollY > 16);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    function setNav(open) {
        if (!navToggle || !mobileNav) return;
        mobileNav.hidden = !open;
        if (header) header.classList.toggle('nav-open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
        const icon = navToggle.querySelector('use');
        if (icon) icon.setAttribute('href', open ? '#i-close' : '#i-menu');
    }

    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', () => setNav(mobileNav.hidden));
        mobileNav.addEventListener('click', event => {
            if (event.target.closest('a')) setNav(false);
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && !mobileNav.hidden) setNav(false);
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 820) setNav(false);
        });
    }

    /* ------------------------------------------------------------------ */
    /* 首屏卡片倾斜                                                         */
    /* ------------------------------------------------------------------ */

    const stage = document.querySelector('[data-tilt]');
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (stage && finePointer && !reducedMotion) {
        stage.addEventListener('pointermove', event => {
            const rect = stage.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            stage.style.setProperty('--tilt-x', `${(-y * 4.5).toFixed(2)}deg`);
            stage.style.setProperty('--tilt-y', `${(x * 6.5).toFixed(2)}deg`);
        });

        stage.addEventListener('pointerleave', () => {
            stage.style.setProperty('--tilt-x', '0deg');
            stage.style.setProperty('--tilt-y', '0deg');
        });
    }

    /* ------------------------------------------------------------------ */
    /* 滚动显现                                                             */
    /* ------------------------------------------------------------------ */

    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    const canObserve = 'IntersectionObserver' in window && !reducedMotion;

    if (canObserve) {
        document.querySelectorAll('.steps, .feature-grid, .privacy-grid').forEach(group => {
            Array.from(group.querySelectorAll('[data-reveal]')).forEach((item, index) => {
                item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
            });
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -8% 0px'
        });

        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add('is-visible'));
    }

    /* ------------------------------------------------------------------ */
    /* 小细节                                                               */
    /* ------------------------------------------------------------------ */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', () => setNav(false));
    });

    const year = new Date().getFullYear();
    document.querySelectorAll('[data-year]').forEach(element => {
        element.textContent = String(year);
    });

    // 页面通过 bfcache 返回时，恢复滚动头部状态。
    window.addEventListener('pageshow', onScroll);

    // 卡片字号随容器宽度变化，行号需要重新计算。
    let recalcTimer = 0;
    window.addEventListener('resize', () => {
        window.clearTimeout(recalcTimer);
        recalcTimer = window.setTimeout(() => renderLineNumbers(), 140);
    });

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => renderLineNumbers());
    }
})();
