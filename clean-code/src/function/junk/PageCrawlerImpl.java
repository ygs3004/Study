package function.junk;


public class PageCrawlerImpl {
    WikiPagePath fullPath;
    public static WikiPage getInheritedPage(String name, WikiPage wikiPage){
        return wikiPage;
    };
    public WikiPagePath getFullPath(WikiPage suiteSetup) {
        return this.fullPath;
    }
}
