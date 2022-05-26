import axios from "axios"; // Modulul care ne leaga frontend-ul cu backend-ul

//export default axios.create({ baseURL: "http://192.168.3.25:3000" }); // Stabileste legatura cu backend-ul pe baza ip-ului calculatorului
export default axios.create({ baseURL: "http://192.168.0.9:3000" }); // IP Cluj Mehedinti - Diana
//export default axios.create({ baseURL: "http://192.168.0.2:3000" }); // IP Cluj Mehedinti - Vladut
//export default axios.create({ baseURL: "http://10.132.4.197:3000" }); // Baritiu - Vladut
//export default axios.create({ baseURL: "http://192.168.3.106:3000" }); // IP Medias Diana
//export default axios.create({ baseURL: "http://192.168.3.25:3000" }); // IP Medias Vladut

// Este o clasa globala, pentrru ca sa nu fie nevoie sa se modifice URL-ul in fiecare fisier individual.
