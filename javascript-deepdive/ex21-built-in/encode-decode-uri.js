// https://www.domain.com:80/docs/search?category=javascript&language=ko#intro -> URI
// https://www.domain.com:80/docs/search -> URL
// www.domain.com:80/docs/search?category=javascript&language=ko#intro -> URN
// https:// -> scheme(Protocol)
// www.domain.com -> Host(Domain)
// :80 -> Port
// docs/search -> Path
// category=javascript&language=ko -> Query(Query String)
// #intro -> Fragment

// 아스키 문자 셋에 정의되지 않은 문자는 URL에 포함될 수 없음 -> 이스케이프 처리
// URL에 올수 없는 문자를 이스케이프 처리하기 위해 encodeURI 사용;
const uri = 'http://example.com?name=윤건수&job=programmer&teacher';
const enc = encodeURI(uri);
console.log(enc); // http://example.com?name=%EC%9C%A4%EA%B1%B4%EC%88%98&job=programmer&teacher

// decodeURI 인코딩된 URI를 이스케이프 이전으로 돌림
const dec = decodeURI(enc);
console.log(dec); // http://example.com?name=윤건수&job=programmer&teacher

// encodeURIComponent/decodeURIComponent
// 전달 인자를 쿼리스트링으로 간주하여 '=, ?, &' 까지 인코딩한다
const uriComp = 'name=윤건수&job=programmer&teacher';
let encComp = encodeURIComponent(uriComp);
console.log(encComp);
let decComp = decodeURIComponent(encComp);
console.log(decComp);
// encodeURI, decodeURI는 문자열을 완전한 URI로 간주하여 '=, ?, &'를 코딩하지 않는다.
encComp = encodeURI(uriComp);
console.log(encComp);

decComp = decodeURI(encComp);
console.log(decComp);