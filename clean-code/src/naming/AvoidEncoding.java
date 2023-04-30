package naming;

public class AvoidEncoding {
    // 인코딩을 피하라(암호화, 부호화)
    // Bad
    public class badPart{
        private String m_dsc;
        void setName(String name){
            m_dsc = name;
        }
    }
    // Good
    public class goodPart{
        String description;
        void setDescription(String description){
            this.description = description;
        }
    }
    
}
