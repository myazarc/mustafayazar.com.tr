# Otel Otomasyonu - Part 1 - Gereksinimler

Merhaba, bu yazı serisinde basitçe bir otel yönetim otomasyonunun sıfırdan yayına kadar olan sürecini sizinle detaylıca paylaşacağım. Proje adı şimdilik "OMira" olmasını planlıyorum. (Kızımın adı Mira :))

Projeyi public repoda ilerleteceğim.

## Otel Otomasyonundan ne bekliyorum?

Otel otomasyonu için beklentilerim;

- Otelde bulunan odaların takibi ve yönetimi
- Otele gelen misafirlerin kayıtları
- Personel yönetimi (Auth&Role. pdks falan yok :))
- Rezervasyon yönetimi

Vaktim olursa; basit bir restoran yönetimini dolayısıyla oda servisi sisteminide ekleyebiliriz. Müşterimizin talebi bunlar olsun.

## Kullanılacak Teknolojiler

Projeyi büyük bir otelin kullanacağını varsayarak microservis üzerine kuracağım.

- Backend için node.js üzerinde nest.js koşacak.
- Frontend için Vue.js
- Veritabanı olarak postgres
- Queue için Apache Kafka
- Cache için Redis
- Kubernetes üzerinde çalışacak
- Loglar ELK üzerinde takip edilecek

## Proje Yapısı

Projede User,Auth,Room,Guests,Booking microservisleri olacak.

- User üzerinde otel personel ve rolleri yer alacak.
- Auth üzerinde personellerin doğrulanması sağlanacak.
- Room üzerinde oda bilgileri ve oda hizmetleri tutulacak.
- Guest üzerinde misafir bilgileri tutulacak.
- Booking üzerindede rezervasyon ve check-in/out işlemleri gerçekleştirilecek.

![OMira Otel Otomasyonu](/images/blog/omira.png)

Bu partta projenin tasarımını tamamladık ve kullancağımız teknolojileri belirledik. Bir sonraki partta geliştirmeye başlayacağız.
