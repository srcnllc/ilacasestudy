import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function TheoreticalTest() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Theoretical Test</h2>
          <ul >
            <li className="mb-3">
              <h4>What is the difference between virtual DOM and real DOM?</h4>
              <p>Gerçek DOM, doğrudan tarayıcıyla etkileşimde bulunduğumuz bir bölümdür. Sanal DOM, gerçek DOM'un bir kopyasıdır ve bir değişiklik yaptığımızda, sanal DOM ile gerçek DOM'u karşılaştırarak yalnızca değişiklik yapılan yerlerin render edilmesini sağlar, bu da daha verimli bir render işlemi sağlar.</p>
            </li>
            <li className="mb-3">
              <h4>What is JSX?</h4>
              <p>JSX, React.js ile birlikte gelen bir sözdizimi uzantısıdır. HTML benzeri kodları JavaScript içinde yazmamıza olanak tanır, böylece HTML ve JavaScript kodlarını birleştirebiliriz.</p>
            </li>
            <li className="mb-3">
              <h4>Why one choose React Context over Redux?</h4>
              <p>Daha küçük projelerde, ek bir paket eklemek yerine Context kullanmak tercih edilebilir. Ancak Context, bileşenler arasındaki veri iletişimini sağlamak için daha çok ara bileşenler kullanır. Büyük projelerde Redux, veri aktarımını daha etkin bir şekilde sağlar çünkü veriyi herhangi bir bileşenden başka bir bileşene taşıyabiliriz.</p>
            </li>
            <li className="mb-3">
              <h4>Can you explain the concept of Higher Order Components in React and provide an example of how you have used them in a previous project?</h4>
              <p>Higher Order Components (HOC), başka bir bileşeni alıp ona ek props veya işlevsellik ekleyen bileşenlerdir. Yaygın bir örnek, tekrar kullanılabilir bir kart bileşeni oluşturmaktır. Eğer bir sayfada benzer yapılar içeren birçok karta ihtiyaç varsa, tek bir kart bileşeni oluşturup her instance'ı için özelleştirerek kullanabilirsiniz.</p>
            </li>
            <li className="mb-3">
              <h4>How would you handle data flow and communication between parent and child components in a React application?</h4>
              <p>Veri, bir ebeveyn bileşenden çocuk bileşene "props" kullanılarak iletilebilir. Çift yönlü iletişim için Context veya React'ın durum yönetimi kullanılabilir, böylece bileşenler arasında veri paylaşımı sağlanabilir.</p>
            </li>
            <li className="mb-3">
              <h4>How should we store the authorization token from the authentication server in the frontend React app in the safest way for authorization?</h4>
              <p>Yetkilendirme token'ları, durum, çerezler, yerel depolama veya oturum depolama gibi tarayıcı içinde saklanabilir, uygulamanın güvenlik gereksinimlerine bağlı olarak en uygun yöntem seçilebilir.</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
