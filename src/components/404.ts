export function create404Page(): string {
  return `
        <main class="err-container">
            <div class="err-content">
                <h1>Sorry!</h1>
                <p class="err-subtitle">We can't seem to find the page you're looking for</p>
                
                <div class="err-links">
                    <h2>Here are some helpful links instead:</h2>
                    
                    <div class="err-links-grid">
                        <a href="https://github.com/ubiquity/ubiquity-dollar/wiki" class="err-nav-link">DOCS</a>
                        <a href="https://dao.ubq.fi/faq" class="err-nav-link">FAQ</a>
                        <a href="https://github.com/ubiquity/ubiquity-dollar" class="err-nav-link">GITHUB</a>
                        <a href="https://discord.com/invite/SjymJ5maJ4" class="err-nav-link">DISCORD</a>
                        <a href="https://t.me/ubiquitydao" class="err-nav-link">TELEGRAM</a>
                        <a href="https://twitter.com/UbiquityDAO" class="err-nav-link">TWITTER</a>
                    </div>
                </div>
            </div>
            
            <div class="err-code">
                404
            </div>
        </main>
`;
}
