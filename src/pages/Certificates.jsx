import "../styles/main.css";
import CertificatesCard from "../components/CertificatesCard";

export default function Certificates({ data }) {
  return (
    <div className="section-header">
      <h1 className="page-title">Подарочные сертификаты</h1>
      <p className="poetic">
        Здесь начинается путь к себе — в ритме древней красоты, в аромате
        лавандовых ванн и прикосновении, что говорит без слов. Soma —
        пространство, где тело и душа наконец встречаются.
      </p>
      {data.map((certificate) => {
        return (
          <CertificatesCard key={certificate.id} certificate={certificate} />
        );
      })}
    </div>
  );
}
