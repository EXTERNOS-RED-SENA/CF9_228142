<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguridad de punto final

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/26.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La seguridad de punto final es un aspecto fundamental en la protección de los equipos de cómputo y la información almacenada en ellos. En esta sección, abordaremos las medidas y herramientas que se utilizan para proteger los dispositivos de amenazas externas, incluyendo antivirus y antimalware, políticas de seguridad, y el control de acceso.

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Antivirus y antimalware

    .row.justify-content-center.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/27.png' alt='')
      .col.pt-lg-0.pt-md-4.j1
        p.mb-0 Los antivirus y las soluciones antimalware son herramientas que sirven para detectar y eliminar #[i software] malicioso que pueda comprometer la seguridad de un equipo. Estas amenazas incluyen virus, troyanos, ransomware, spyware y otros programas dañinos.  

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="Funcionamiento de los antivirus")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/28.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Funcionamiento de los antivirus
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b Análisis en tiempo real:] Los antivirus modernos monitorean constantemente las actividades en el equipo para identificar y bloquear amenazas antes de que puedan causar daño. Esto incluye la revisión de archivos descargados, correos electrónicos y dispositivos externos conectados al equipo. 
              li 
                i.fas.fa-check.color1
                span #[b Actualizaciones de definiciones de virus:] Los fabricantes de antivirus actualizan regularmente sus bases de datos de definiciones para proteger contra nuevas amenazas. Se deben mantener estas actualizaciones para que el antivirus sea efectivo. 
              li 
                i.fas.fa-check.color1
                span #[b Escaneos programados:] Configurar el #[i software] antivirus para realizar análisis periódicos del sistema ayuda a detectar y eliminar amenazas que puedan haber pasado desapercibidas.               

      .py-3.py-md-4.bg11(titulo="Tipos de <i>software antimalware</i>")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/29.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Tipos de #[i software antimalware]
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b Antispyware:] Se enfoca en detectar y eliminar programas que recolectan información del usuario sin su consentimiento, como contraseñas o datos personales. 
              li 
                i.fas.fa-check.color1
                span #[b Antiransomware:] Ofrece protección específica contra #[i software] malicioso que cifra los archivos del usuario y exige un pago para liberarlos.  
              li 
                i.fas.fa-check.color1
                span #[b #[i software] de eliminación de adware:] Diseñado para identificar y remover programas que muestran anuncios no deseados o modifican la experiencia del usuario en el navegador.                                               
    p.mb-5 El uso de una combinación de herramientas de seguridad puede proporcionar una protección más robusta contra diversas amenazas.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 1. 
          span Características y ejemplos de antivirus y antimalware

        .tabla-a.color-acento-botones.text-center.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Aspecto
                th Descripción 
                th Ejemplos 

            tbody
              tr
                td.fst-bold.bgt1 Análisis en tiempo real. 
                td Monitorea continuamente las actividades en el sistema para detectar y bloquear amenazas de inmediato.   
                td Norton, Kaspersky, Bitdefender.

              tr
                td.fst-bold.bgt1 Actualizaciones de definiciones.
                td Las bases de datos de virus y #[i malware] se actualizan regularmente para proteger contra las últimas amenazas conocidas.     
                td McAfee, Avast, ESET. 

              tr
                td.fst-bold.bgt1 Escaneos programados.
                td Permite configurar análisis periódicos del sistema para identificar y eliminar posibles amenazas de manera automática.    
                td Avira, Sophos, Windows Defender. 

              tr
                td.fst-bold.bgt1 Antispyware.
                td #[i software] especializado en detectar y eliminar programas que recolectan información del usuario sin autorización.    
                td Malwarebytes, Spybot, Adaware. 

              tr
                td.fst-bold.bgt1 Antiransomware.
                td Ofrece protección contra #[i malware] que cifra archivos y exige un rescate, impidiendo el acceso del usuario a sus datos.    
                td Bitdefender, Kaspersky, Webroot. 

              tr
                td.fst-bold.bgt1 Eliminación de adware.
                td Identifica y remueve programas que muestran anuncios no deseados o interfieren con la experiencia del usuario en el navegador.    
                td Malwarebytes, AdwCleaner, Avast. 

              tr
                td.fst-bold.bgt1 Protección web.
                td Analiza y bloquea sitios web maliciosos, evitando que el usuario acceda a páginas que puedan comprometer su seguridad.    
                td Norton Safe Web, McAfee WebAdvisor. 

              tr
                td.fst-bold.bgt1 Herramientas de cuarentena.
                td Aísla los archivos sospechosos para evitar que afecten al sistema hasta que se decida eliminarlos o restaurarlos.   
                td AVG, Kaspersky, Windows Defender. 

              tr
                td.fst-bold.bgt1 Informes y notificaciones.
                td Proporciona reportes detallados sobre las amenazas detectadas y notifica al usuario cuando se requiere acción inmediata.     
                td Symantec, Trend Micro, F-Secure.
                

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Políticas de seguridad

    .row.justify-content-center.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/30.png' alt='')
      .col.pt-lg-0.pt-md-4.j1
        p.mb-0 Las políticas de seguridad establecen directrices para proteger los datos y los sistemas de una organización o un usuario individual. Estas políticas definen cómo se deben manejar, almacenar y proteger los recursos informáticos.  

    .row.bg4.align-items-center
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-3.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/31.png' alt='')           
          .col-lg-9.my-lg-0.my-3
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
              div(titulo="Principales elementos de las políticas de seguridad")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span Contraseñas seguras: Se debe requerir el uso de contraseñas complejas que combinen letras, números y caracteres especiales, y que se actualicen periódicamente. Herramientas como los gestores de contraseñas pueden ayudar a mantener estas credenciales seguras.   
                  li 
                    i.fas.fa-check.color1
                    span Políticas de actualización: Se deben establecer directrices para mantener el sistema operativo y el #[i software] actualizados. Las actualizaciones corrigen vulnerabilidades que pueden ser explotadas por atacantes. 
                  li 
                    i.fas.fa-check.color1
                    span Acceso a datos sensibles: Limitar el acceso a información crítica solo a personas autorizadas es importante para prevenir fugas o robos de datos. Esto incluye el uso de permisos específicos y autenticación multifactorial (MFA) cuando sea posible.                   
              div(titulo="Concienciación y capacitación")
                p La formación de los usuarios en buenas prácticas de seguridad es fundamental para minimizar riesgos. Esto incluye el reconocimiento de correos electrónicos de phishing, la importancia de no compartir contraseñas, y la precaución al conectar dispositivos USB desconocidos.  

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Control de acceso

    .row.justify-content-center.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')
      .col.pt-lg-0.pt-md-4.j1
        p.mb-0 El control de acceso es una medida de seguridad que regula quién puede acceder a qué recursos dentro de un sistema informático. Este control garantiza que solo las personas autorizadas puedan interactuar con datos sensibles o realizar acciones críticas en el sistema. 

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="Tipos de control de acceso")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/33.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Tipos de control de acceso: 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b Control de acceso basado en roles (RBAC):] Asigna permisos a los usuarios según su función dentro de una organización. Por ejemplo, un administrador de red puede tener acceso total, mientras que un usuario estándar solo tiene permisos limitados.
              li 
                i.fas.fa-check.color1
                span #[b Control de acceso basado en atributos (ABAC):] Permite o niega el acceso a los recursos según atributos específicos, como la ubicación, el tipo de dispositivo o la hora del día. Este método es más flexible y adecuado para entornos que requieren un alto nivel de personalización.
              li 
                i.fas.fa-check.color1
                span #[b Listas de control de acceso (ACLs):] Especifican qué usuarios o grupos tienen permiso para acceder a ciertos recursos, y qué acciones pueden realizar (leer, escribir, ejecutar).             

      .py-3.py-md-4.bg11(titulo="Herramientas y métodos de control de acceso")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/34.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Herramientas y métodos de control de acceso: 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b #[i software] de autenticación:] Las herramientas de autenticación aseguran que solo los usuarios legítimos puedan acceder al sistema. Esto incluye el uso de contraseñas, tokens de seguridad, o autenticación biométrica (como huellas dactilares o reconocimiento facial).
              li 
                i.fas.fa-check.color1
                span #[b Sistemas de gestión de identidades (IDM):] Automatizan el proceso de asignación y gestión de permisos, asegurando que se cumplan las políticas de seguridad.  

    .row.justify-content-center
      .col-lg-8
        .row.justify-content-center.bg1.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/9.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 El control de acceso no solo protege los datos, sino que también ayuda a prevenir el uso indebido de los recursos de la red, manteniendo un entorno informático seguro.
</template>

<script>
import TabsC from '../bootstrap/TabsC'
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema3',
  components: { TabsC, AcordionA },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
