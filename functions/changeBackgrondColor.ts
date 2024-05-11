export function changeBackgroundColor (isDark: boolean) {
    if (isDark) {
        document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
    } else {
        document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
    }
}