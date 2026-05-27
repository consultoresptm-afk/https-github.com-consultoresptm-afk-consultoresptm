import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-24 font-sans text-foreground">
      <SEOHead 
        title="Política de Privacidad y Tratamiento de Datos | Consultores PTM" 
        description="Política de Privacidad y Tratamiento de Datos Personales de Consultores PTM Gestión y Cumplimiento SAS, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1074 de 2015."
      />
      <Navbar />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="space-y-6">
          <div className="border-b border-border pb-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary font-medium tracking-tight mb-4">
              Política de Privacidad y Tratamiento de Datos Personales
            </h1>
            <p className="text-muted-foreground text-lg">
              En cumplimiento de la Ley 1581 de 2012 y normatividad concordante.
            </p>
          </div>

          <div className="prose prose-slate prose-headings:font-display prose-headings:text-primary max-w-none prose-a:text-teal hover:prose-a:text-teal/80">
            <p className="lead text-lg text-muted-foreground font-medium mt-8">
              Consultores PTM Gestión y Cumplimiento SAS, comprometido con la seguridad y privacidad de la información, establece la presente Política de Tratamiento de Datos Personales.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. Identificación del Responsable del Tratamiento</h2>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Razón Social:</strong> Consultores PTM Gestión y Cumplimiento SAS</li>
              <li><strong>NIT:</strong> <span className="italic text-muted-foreground">[Dato Omitido Temporalmente]</span></li>
              <li><strong>Domicilio Principal:</strong> Carrera 21 N° 64 Sur - 79, Bogotá D.C., Colombia</li>
              <li><strong>Correo Electrónico (PQR y Habeas Data):</strong> <a href="mailto:info@consultoresptm.com">info@consultoresptm.com</a></li>
              <li><strong>Teléfono de Contacto:</strong> +57 316 820 3824</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. Marco Legal</h2>
            <p className="mb-8">
              Esta política se rige bajo los parámetros establecidos por la Constitución Política de Colombia (Art. 15), la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y el Decreto 1074 de 2015, los cuales dictan las disposiciones generales para la protección de datos personales.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. Finalidades del Tratamiento de Datos Personales</h2>
            <p className="mb-4">
              Los datos personales recolectados a través de nuestros canales de contacto, sitio web, formularios y prestación de servicios serán utilizados para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Gestionar, tramitar y responder a las consultas, quejas o reclamos (PQR) presentados por los Titulares.</li>
              <li>Proveer de forma efectiva la consultoría, servicios y/o productos requeridos por nuestros clientes.</li>
              <li>Envío de propuestas comerciales, cotizaciones y portafolios de servicios de consultoría.</li>
              <li>Prospección comercial y evaluación para futuros proyectos o servicios.</li>
              <li>Remisión de boletines informativos (newsletter), actualizaciones normativas (ISO, SST, Gestión Ambiental) y comunicaciones corporativas.</li>
              <li>Evaluar la calidad de nuestros servicios prestados.</li>
              <li>Cumplir con las obligaciones legales, contables, tributarias y contractuales derivadas de la relación comercial, laboral o de prestación de servicios.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. Derechos que le Asisten como Titular de los Datos</h2>
            <p className="mb-4">De conformidad con la normatividad vigente, usted como titular de datos personales tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a Consultores PTM Gestión y Cumplimiento SAS en su condición de Responsable del Tratamiento.</li>
              <li><strong>Solicitar prueba de la autorización</strong> otorgada para el tratamiento de sus datos.</li>
              <li><strong>Ser informado</strong> sobre el uso que se le ha dado a sus datos personales.</li>
              <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normatividad vigente, una vez haya agotado el trámite de consulta o reclamo ante el Responsable.</li>
              <li><strong>Revocar la autorización</strong> y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</li>
              <li><strong>Acceder en forma gratuita</strong> a sus datos personales que hayan sido objeto de Tratamiento.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. Área Responsable y Procedimiento PQR (Habeas Data)</h2>
            <p className="mb-4">
              El área encargada de la atención de peticiones, consultas y reclamos ante la cual el Titular puede ejercer sus derechos es la Gerencia Administrativa.
            </p>
            <p className="mb-4">
              <strong>Procedimiento para consultas y reclamos:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>El Titular o sus causahabientes deben enviar una comunicación por escrito al correo electrónico <strong><a href="mailto:info@consultoresptm.com">info@consultoresptm.com</a></strong>, adjuntando copia de su documento de identidad.</li>
              <li>La solicitud debe contener: identificación del titular, descripción clara de los hechos que motivan la solicitud (consulta, actualización, corrección, supresión o revocatoria), dirección de notificación (física o electrónica) y documentos anexos si aplican.</li>
              <li>Las consultas serán atendidas en un término máximo de diez (10) días hábiles. Si no fuere posible atender la consulta en dicho término, se informará al interesado antes del vencimiento, indicando los motivos y la fecha en que será atendida, lo cual no superará los cinco (5) días hábiles siguientes al vencimiento del primer plazo.</li>
              <li>Los reclamos serán atendidos en un término máximo de quince (15) días hábiles, prorrogables por ocho (8) días más en los casos que establece la ley.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">6. Medidas de Seguridad</h2>
            <p className="mb-8">
              Consultores PTM Gestión y Cumplimiento SAS ha adoptado e implementado las medidas técnicas, humanas y administrativas necesarias para garantizar la seguridad de los datos personales, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">7. Vigencia de la Política</h2>
            <p className="mb-8">
              La presente Política rige a partir de la fecha de su expedición y los datos personales sujetos a Tratamiento se mantendrán vigentes durante el tiempo que sea razonable y necesario, de acuerdo con las finalidades que justificaron el Tratamiento o mientras se mantenga la relación contractual, así como el término establecido por las normas legales aplicables.
            </p>
            
            <p className="text-sm text-muted-foreground mt-12 italic">
              Última actualización: {new Date().toLocaleDateString('es-CO')}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
