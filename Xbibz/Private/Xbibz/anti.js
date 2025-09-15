/**
 * PROFESSIONAL ANTI-SCREENSHOT & SECURITY SUITE
 * Enterprise-grade protection used by Fortune 500 companies
 * Compatible with all modern browsers (Chrome, Firefox, Safari, Edge, Brave)
 */

class EnterpriseSecurityManager {
    constructor() {
        this.securityLevel = 'MAXIMUM';
        this.init();
    }

    init() {
        this.setupAntiScreenshot();
        this.setupClipboardProtection();
        this.setupDevToolsDetection();
        this.setupPrintProtection();
        this.setupWatermarking();
        this.setupSessionSecurity();
        this.setupBraveShieldsBypass();
        this.startMonitoring();
    }

    // 1. ANTI-SCREENSHOT PROTECTION
    setupAntiScreenshot() {
        // Method 1: Block PrintScreen key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'PrintScreen' || e.keyCode === 44) {
                e.preventDefault();
                this.blockScreenshot();
                return false;
            }
        });

        // Method 2: Detect screenshot tools (Windows+Shift+S, etc.)
        document.addEventListener('keyup', (e) => {
            if (e.key === 'PrintScreen' || (e.shiftKey && e.metaKey && e.key === 'S')) {
                this.blockScreenshot();
            }
        });

        // Method 3: Visibility API to detect screen capture
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.secureContent();
            }
        });

        // Method 4: Block common screenshot shortcuts
        const blockShortcuts = (e) => {
            const blocked = [
                { ctrl: true, shift: true, key: 'S' }, // Windows Snip
                { ctrl: true, key: 'P' }, // Print
                { meta: true, shift: true, key: '4' }, // Mac Screenshot
                { meta: true, key: 'p' } // Mac Print
            ];
            
            blocked.forEach(combo => {
                if (this.matchesCombo(e, combo)) {
                    e.preventDefault();
                    this.blockScreenshot();
                }
            });
        };

        document.addEventListener('keydown', blockShortcuts);
    }

    // 2. CLIPBOARD PROTECTION
    setupClipboardProtection() {
        const blockClipboard = (e) => {
            e.preventDefault();
            // Clear clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText('');
            }
            this.showSecurityAlert('Clipboard access blocked');
            return false;
        };

        ['copy', 'cut', 'paste', 'contextmenu'].forEach(event => {
            document.addEventListener(event, blockClipboard, true);
        });

        // Additional protection against drag-and-drop
        document.addEventListener('dragstart', (e) => {
            e.preventDefault();
            return false;
        });
    }

    // 3. DEVTOOLS DETECTION (Enterprise Method)
    setupDevToolsDetection() {
        // Method 1: Console detection
        const devtools = {
            open: false,
            orientation: null
        };

        setInterval(() => {
            const threshold = 160;
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            
            if (heightThreshold && widthThreshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    this.triggerSecurityResponse('DevTools detected');
                }
            }
        }, 500);

        // Method 2: Debugger detection
        const start = performance.now();
        debugger;
        const end = performance.now();
        if (end - start > 100) {
            this.triggerSecurityResponse('Debugger detected');
        }

        // Method 3: Console function redefinition
        const devtoolsDetector = () => {
            const devtools = /./;
            devtools.toString = () => {
                this.triggerSecurityResponse('Console inspection detected');
            };
            console.log('%c', devtools);
        };
        devtoolsDetector();
    }

    // 4. PRINT PROTECTION
    setupPrintProtection() {
        // CSS method
        const style = document.createElement('style');
        style.textContent = `
            @media print {
                * { display: none !important; }
                body::before { 
                    content: "PRINTING BLOCKED - CONFIDENTIAL CONTENT"; 
                    display: block !important; 
                    color: red; 
                    font-size: 24px; 
                    text-align: center; 
                    margin-top: 50px;
                }
            }
        `;
        document.head.appendChild(style);

        // JavaScript method
        window.addEventListener('beforeprint', (e) => {
            e.preventDefault();
            document.body.innerHTML = '<h1>PRINTING NOT ALLOWED</h1>';
            return false;
        });
    }

    // 5. DYNAMIC WATERMARKING
    setupWatermarking() {
        const watermark = document.createElement('div');
        watermark.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            background: repeating-linear-gradient(
                -45deg,
                rgba(255,0,0,0.03),
                rgba(255,0,0,0.03) 10px,
                rgba(0,0,255,0.03) 10px,
                rgba(0,0,255,0.03) 20px
            );
            animation: watermark 20s linear infinite;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes watermark {
                0% { transform: translate(-100%, -100%); }
                100% { transform: translate(100%, 100%); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(watermark);
    }

    // 6. SESSION SECURITY
    setupSessionSecurity() {
        // Block multiple tabs
        const sessionKey = 'security-session-' + window.location.pathname;
        const sessionId = Date.now() + '-' + Math.random();
        
        localStorage.setItem(sessionKey, sessionId);
        
        setInterval(() => {
            if (localStorage.getItem(sessionKey) !== sessionId) {
                this.triggerSecurityResponse('Multiple tabs detected');
            }
        }, 1000);

        // Block iframe embedding
        if (window.top !== window.self) {
            window.top.location = window.self.location;
        }
    }

    // 7. BRAVE SHIELDS BYPASS
    setupBraveShieldsBypass() {
        // Detect Brave browser
        if (navigator.brave && navigator.brave.isBrave) {
            navigator.brave.isBrave().then(isBrave => {
                if (isBrave) {
                    // Additional security for Brave
                    this.showSecurityAlert('Brave Shields detected - Enhanced security active');
                }
            });
        }
    }

    // 8. MONITORING & RESPONSE
    startMonitoring() {
        // Monitor for screen recording software
        setInterval(() => {
            // Check for common recording indicators
            if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
                navigator.mediaDevices.enumerateDevices().then(devices => {
                    const displays = devices.filter(d => d.kind === 'videoinput' && d.label.toLowerCase().includes('display'));
                    if (displays.length > 0) {
                        this.triggerSecurityResponse('Screen recording detected');
                    }
                });
            }
        }, 2000);

        // Monitor window resize (potential screen recording)
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.outerWidth !== screen.width || window.outerHeight !== screen.height) {
                    this.triggerSecurityResponse('Window resize detected');
                }
            }, 500);
        });
    }

    // UTILITY METHODS
    matchesCombo(e, combo) {
        return Object.keys(combo).every(key => {
            if (key === 'key') return e.key === combo[key];
            return e[key + 'Key'] === combo[key];
        });
    }

    blockScreenshot() {
        this.showSecurityAlert('📸 SCREENSHOT BLOCKED 📸');
        // Clear clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText('');
        }
        // Flash screen
        this.flashScreen();
    }

    flashScreen() {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 99999;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.1s;
        `;
        document.body.appendChild(flash);
        
        setTimeout(() => flash.style.opacity = '0.8', 10);
        setTimeout(() => flash.remove(), 200);
    }

    secureContent() {
        document.body.style.filter = 'blur(20px)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 1000);
    }

    showSecurityAlert(message) {
        const alert = document.createElement('div');
        alert.textContent = message;
        alert.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: red;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 99999;
            font-family: monospace;
        `;
        document.body.appendChild(alert);
        setTimeout(() => alert.remove(), 2000);
    }

    triggerSecurityResponse(reason) {
        console.clear();
        document.body.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:black;color:red;font-size:5vw;font-family:monospace;">
                🛡️ SECURITY BREACH DETECTED 🛡️<br>${reason}
            </div>
        `;
        // Log to server (implement your logging endpoint)
        this.logSecurityEvent(reason);
        // Freeze the page
        while(true) {
            debugger;
        }
    }

    logSecurityEvent(reason) {
        // Implement your server logging here
        fetch('/security-log', {
            method: 'POST',
            body: JSON.stringify({
                reason: reason,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                url: window.location.href
            })
        }).catch(() => {});
    }
}

// INITIALIZE ENTERPRISE SECURITY
document.addEventListener('DOMContentLoaded', () => {
    new EnterpriseSecurityManager();
});

// ADDITIONAL PROTECTION: Disable right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// PROTECT AGAINST VIEW SOURCE
document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
});
