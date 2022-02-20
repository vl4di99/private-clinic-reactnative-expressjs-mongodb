import axios from "axios"; // Modulul care ne leaga frontend-ul cu backend-ul

//export default axios.create({ baseURL: "http://192.168.3.25:3000" }); // Stabileste legatura cu backend-ul pe baza ip-ului calculatorului
export default axios.create({ baseURL: "http://192.168.0.2:3000" }); // IP Cluj Mehedinti

// Este o clasa globala, pentrru ca sa nu fie nevoie sa se modifice URL-ul in fiecare fisier individual.
