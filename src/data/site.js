export const site = {
  name: "GlobalOkul",
  tagline: "Doğru bilgi, doğru adım, güvenli gelecek",
  description:
    "Almanya başta olmak üzere Avrupa'da üniversite eğitimi için üniversite kaydı, vize, konaklama ve dil kursu süreçlerini uçtan uca yöneten yurt dışı eğitim danışmanlığı.",
  email: "info@globalokul.com",
  phone: "+905435834369",
  phoneDisplay: "+90 543 583 4369",
  whatsapp: "905435834369",
  whatsappUrl: "https://wa.me/905435834369?text=Merhaba%2C%20GlobalOkul%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  instagram: "https://www.instagram.com/globalokul/",
  map: "https://share.google/aCElzY5sCbpWwKCnB",
};

export const nav = [
  { label: "Teklifler", href: "/#teklifler" },
  { label: "Nasıl çalışıyoruz", href: "/#yol-haritasi" },
  { label: "Ülkeler", href: "/#ulkeler" },
  { label: "Neden biz", href: "/#neden-biz" },
  { label: "İletişim", href: "/#randevu" },
];

export const offerings = [
  {
    slug: "universite", href: "/ulkeler/almanya", lead: true, title: "Yurt dışında üniversite",
    blurb: "Lisans ve yüksek lisans için üniversite kaydı, şartlı kabul ve vize. Ücretsiz YKS tercih desteğiyle doğru bölüme yönlendirme.",
    points: ["Şartlı kabul (dil olmadan başvuru)", "Ücretsiz YKS tercih danışmanlığı", "Önlisans mezununa lisans kabulü"],
  },
  {
    slug: "ausbildung", href: "/ulkeler/almanya/ausbildung", lead: false, title: "Ausbildung",
    blurb: "Almanya'da maaşlı meslek eğitimi: başvuru, sözleşme ve vize süreçlerinde rehberlik.",
    points: [],
  },
  {
    slug: "sommer-work", href: "/ulkeler/almanya/sommer-work", lead: false, title: "Sommer Work in Germany",
    blurb: "Yaz döneminde Almanya'da çalışma imkânı için başvuru ve hazırlık desteği.",
    points: [],
  },
];

export const countries = [
  { slug: "almanya", name: "Almanya", city: "Aachen", featured: true,
    blurb: "Ana odağımız. Şartlı kabul, ücretsiz eğitim ve YKS ile başvuru yolları." },
  { slug: "italya", name: "İtalya", city: "Bologna", featured: false,
    blurb: "İngilizce programlar, IMAT/TOLC sınavları ve DSU bursları." },
  { slug: "romanya", name: "Romanya", city: "Cluj", featured: false,
    blurb: "Uygun maliyetli programlar ve çeşitli eğitim dili seçenekleri." },
  { slug: "cekya", name: "Çekya", city: "Praha", featured: false,
    blurb: "İngilizce programlar ve Çekçe eğitim için dil hazırlığı." },
  { slug: "polonya", name: "Polonya", city: "Kraków", featured: false,
    blurb: "İngilizce lisans ve yüksek lisans seçenekleri." },
  { slug: "avusturya", name: "Avusturya", city: "Wien", featured: false,
    blurb: "Köklü üniversiteler ve Almanca eğitim imkânları." },
];

export const steps = [
  { n: 1, title: "Ücretsiz ön görüşme", icon: "chat",
    detail: "Hedefini, bütçeni ve durumunu dinliyoruz. Baskı yok; önce seni anlıyoruz." },
  { n: 2, title: "Akademik değerlendirme", icon: "search",
    detail: "Eğitim geçmişi, YKS ve dil durumunu inceleyip gerçekçi seçenekleri çıkarıyoruz." },
  { n: 3, title: "Ülke ve bölüm seçimi", icon: "compass",
    detail: "Sana en uygun ülke ve bölümü gerekçeleriyle sunuyoruz; kararı sen veriyorsun." },
  { n: 4, title: "Başvuru ve evrak", icon: "doc",
    detail: "Belgeleri ve başvuruları biz organize ediyoruz; şartlı kabul dahil." },
  { n: 5, title: "Vize ve hazırlık", icon: "passport",
    detail: "Güncel resmî şartlara göre vize ve gidiş öncesi hazırlık sürecini yürütüyoruz." },
  { n: 6, title: "Kayıt ve başlangıç", icon: "cap",
    detail: "Konaklama, belediye adres kaydı, oturum ve varış sonrası destek — yalnız bırakmıyoruz." },
];

export const whyUs = [
  { title: "Bizzat yaşadık", text: "Kurucu Almanya'da (RWTH Aachen) okudu; her danışman ilgili ülkede eğitim aldı. Danışmanlık teoriden değil, deneyimden." },
  { title: "Şartlı kabul uzmanlığı", text: "Dil bilmeden üniversiteden şartlı kabul, Türkiye'de A2 ile vize, Almanya'da C1 sonrası başvuru." },
  { title: "Tek elden tüm işlemler", text: "Kayıt, vize, konaklama, dil kursu bizde; sen yalnızca eğitime odaklanırsın." },
  { title: "Varışta bırakmıyoruz", text: "Adres kaydı, oturum işlemleri ve sonraki üniversite başvurusu dahil destek." },
  { title: "Ücretsiz ön görüşme", text: "Ücretsiz YKS tercih desteğiyle yanlış tercihi en baştan önlüyoruz." },
  { title: "İade güvencesi", text: "Süreç başarısız olursa yaptığın ödemelerin iadesi. (Koşullar görüşmede netleşir.)" },
];

export const updatesCount = 8;