<h1 align="center">İLA Case Study</h1>

Öncelikle tarafıma göndermiş olduğunuz çalışma için çok teşekkür ederim.
Projeyi ilk olarak ```npm i``` komutu ile bağımlı olan paketlerin indirilmesi sağlanmalıdır.
Theoretical Test bölümü için projeye bir link ekledim soruları cevaplamaya çalıştım.Ve aşağıya aynı cevapları tekrar ekliyorum.

Demo_link : 

___


Theoretical Test:

1. What is the difference between virtual DOM and real DOM?
  - Gerçek DOM, doğrudan tarayıcıyla etkileşimde bulunduğumuz bir bölümdür. Sanal DOM, gerçek DOM'un bir kopyasıdır ve bir değişiklik yaptığımızda, sanal DOM ile gerçek DOM'u karşılaştırarak yalnızca değişiklik yapılan yerlerin render edilmesini sağlar, bu da daha verimli bir render işlemi sağlar.
2. What is JSX?
  - JSX, React.js ile birlikte gelen bir sözdizimi uzantısıdır. HTML benzeri kodları JavaScript içinde yazmamıza olanak tanır, böylece HTML ve JavaScript kodlarını birleştirebiliriz.
3. Why one choose React Context over Redux?
  - Daha küçük projelerde, ek bir paket eklemek yerine Context kullanmak tercih edilebilir. Ancak Context, bileşenler arasındaki veri iletişimini sağlamak için daha çok ara bileşenler kullanır. Büyük projelerde Redux, veri aktarımını daha etkin bir şekilde sağlar çünkü veriyi herhangi bir bileşenden başka bir bileşene taşıyabiliriz.
4. Can you explain the concept of Higher Order Components in React and provide an example of 
how you have used them in a previous project?
  - Higher Order Components (HOC), başka bir bileşeni alıp ona ek props veya işlevsellik ekleyen bileşenlerdir. Yaygın bir örnek, tekrar kullanılabilir bir kart bileşeni oluşturmaktır. Eğer bir sayfada benzer yapılar içeren birçok karta ihtiyaç varsa, tek bir kart bileşeni oluşturup her instance'ı için özelleştirerek kullanabilirsiniz.
5. How would you handle data flow and communication between parent and child components in 
a React application?
  - Veri, bir ebeveyn bileşenden çocuk bileşene "props" kullanılarak iletilebilir. Çift yönlü iletişim için Context veya React'ın durum yönetimi kullanılabilir, böylece bileşenler arasında veri paylaşımı sağlanabilir.
6. How should we store the authorization token from the authentication server in the frontend
react app in the safest way for authorization?
  - Yetkilendirme token'ları, durum, çerezler, yerel depolama veya oturum depolama gibi tarayıcı içinde saklanabilir, uygulamanın güvenlik gereksinimlerine bağlı olarak en uygun yöntem seçilebilir.
