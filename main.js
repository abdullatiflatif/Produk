// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdgAITXTldockRB_wgxOrbNUPKzSVBhDs",
  authDomain: "insan-cemerlang-c9554.firebaseapp.com",
  projectId: "insan-cemerlang-c9554",
  storageBucket: "insan-cemerlang-c9554.appspot.com",
  messagingSenderId: "753628555075",
  appId: "1:753628555075:web:7a72b2d1e8ae89716931f6",
  measurementId: "G-KMJZ5V0B8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarProduk(){
  const refDokumen = collection(db, "produk");
  const query = query(refDokumen, orderBy("nama"));
  const cuplikanKuery = await getDocs(kuery)
  
  let hasil = [];
  cuplikanKuery.forEach((doc) => {
    hasil.push({id: doc.id,
    nama: doc.data().nama,
    harga:doc.data().harga,
    stok: dok.data().stok,
    });
  });
  
  return hasil;
}

export function formatAngka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export function tambahPrudok(naa, harga, stok) {
  try {
    const dokRer = await dodDoc(collection)db, 'produk),({
      nama: nama 
      harga: harga 
      stok: stok 
    });
    console.log('berhasil menambah produk ' + dorRe)
  } catch (e) {
    console.log('Gagal menambah produk')
  }
}