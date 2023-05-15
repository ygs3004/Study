package function.fitnessExample.refactoring;

import function.junk.PageData;
import function.junk.WikiPage;

/* function.badExample.HtmlUtil 리팩토링 버젼*/
public class HtmlUtil {

    public static String renderPageWithSetupsAndTeardownsRe(PageData pageData, boolean isSuite) throws Exception{
        if(isTestPage(pageData)){
            includeSetupAndTeardownPages(pageData, isSuite);
        }
        return pageData.getHtml();
    }

    // 리팩토링1
    public String renderPageWithSetupAndTeardowns(PageData pageData, boolean isSuite) throws Exception {
        boolean isTestPage = pageData.hasAttribute("Test");
        if(isTestPage){
            WikiPage testPage = pageData.getWikiPage();
            StringBuffer newPageContent = new StringBuffer();
            includeSetupPages(testPage, newPageContent, isSuite);
            newPageContent.append(pageData.getContent());
            includeTeardownPages(testPage, newPageContent, isSuite);
            pageData.setContent(newPageContent.toString());
        }
        return pageData.getHtml();
    }

    /* Junk */
    private static void includeSetupAndTeardownPages(PageData pageData, boolean isSuite) {
        /**/
    }
    private static boolean isTestPage(PageData pageData) {
        /**/
        return true;
    }
    private void includeSetupPages(WikiPage testPage, StringBuffer newPageContent, boolean isSuite) {
        /**/
    }
    private void includeTeardownPages(WikiPage testPage, StringBuffer newPageContent, boolean isSuite) {
        /**/
    }
}
