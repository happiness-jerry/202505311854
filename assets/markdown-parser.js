// 简单的Markdown解析器
function parseMarkdown(markdown) {
    // 替换规则
    const rules = [
        { regex: /^## (.*$)/gim, replace: '<h3>$1</h3>' },
        { regex: /^### (.*$)/gim, replace: '<h4>$1</h4>' },
        { regex: /^#### (.*$)/gim, replace: '<h5>$1</h5>' },
        { regex: /\*\*(.*?)\*\*/g, replace: '<strong>$1</strong>' },
        { regex: /\*(.*?)\*/g, replace: '<em>$1</em>' },
        { regex: /`(.*?)`/g, replace: '<code>$1</code>' },
        { regex: /^> (.*$)/gim, replace: '<blockquote>$1</blockquote>' },
        { regex: /\[(.*?)\]\((.*?)\)/g, replace: '<a href="$2">$1</a>' },
        { regex: /\n/g, replace: '<br>' }
    ];

    let html = markdown;
    rules.forEach(rule => {
        html = html.replace(rule.regex, rule.replace);
    });
    
    return html;
}