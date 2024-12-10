<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión de red

    .row.justify-content-center.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/35.png' alt='')
      .col.pt-lg-0.pt-md-4
        .bg2.p-4.brad
          p.mb-0 La gestión de red es un aspecto central en cualquier entorno informático, ya que permite configurar, mantener y asegurar la conectividad y el acceso a recursos compartidos de manera eficiente. En esta sección, se abordarán conceptos y prácticas relacionados con la gestión de directorios, recursos compartidos y políticas de grupo. 

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Directorio activo y dominios

    p.mb-5 El #[b Directorio Activo (#[i Active Directory)]] es un servicio desarrollado por Microsoft que facilita la administración centralizada de usuarios, equipos y recursos en una red basada en Windows. Es utilizado principalmente en entornos corporativos para gestionar permisos y políticas de seguridad de manera eficiente.
    .row.bg4.align-items-center.mb-5
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-9.my-lg-0.my-3
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
              div(titulo="Conceptos")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Dominio:] Un dominio es un conjunto de usuarios, grupos y dispositivos que comparten una base de datos de Directorio Activo. Permite a los administradores gestionar de manera centralizada las cuentas y recursos de la red.
                  li 
                    i.fas.fa-check.color1
                    span #[b Controlador de dominio:] Es el servidor que ejecuta el Directorio Activo y se encarga de autenticar a los usuarios y gestionar las políticas de seguridad. Se asegura de que solo los usuarios autorizados puedan acceder a los recursos de la red.                    
              div(titulo="Funciones del Directorio Activo")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Gestión de usuarios y grupos:] Permite crear, modificar y eliminar cuentas de usuario, y organizar a los usuarios en grupos para asignar permisos de manera más eficiente.
                  li 
                    i.fas.fa-check.color1
                    span #[b Autenticación:] Valida las credenciales de los usuarios cuando intentan acceder a recursos de la red, proporcionando un alto nivel de seguridad.
                  li 
                    i.fas.fa-check.color1
                    span #[b Políticas de seguridad:] Los administradores pueden configurar políticas de grupo que aplican configuraciones de seguridad y de sistema a los usuarios y equipos en el dominio.                   
              div(titulo="Ventajas de usar el directorio activo")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Centralización:] Simplifica la gestión de la red al permitir a los administradores controlar todo desde un único punto.
                  li 
                    i.fas.fa-check.color1
                    span #[b Escalabilidad:] Se adapta a redes de cualquier tamaño, desde pequeñas oficinas hasta grandes organizaciones con miles de dispositivos.     

                  li 
                    i.fas.fa-check.color1
                    span #[b Seguridad:] Ofrece una estructura robusta para proteger los datos y recursos de la red mediante autenticación y políticas de acceso.

          .col-lg-3.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/36.png' alt='')                                  

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Recursos compartidos

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/37.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Compartir recursos en una red permite a los usuarios acceder de manera eficiente a archivos, impresoras y otros dispositivos. Una correcta configuración de estos recursos es fundamental para optimizar la colaboración y el uso de los dispositivos.   

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="Tipos de recursos compartidos")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/38.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Tipos de recursos compartidos
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b Archivos y carpetas:] Los archivos y carpetas pueden compartirse en la red, permitiendo a los usuarios colaborar y trabajar en documentos de forma simultánea. Los administradores pueden asignar permisos de lectura, escritura o edición para controlar el acceso.
              li 
                i.fas.fa-check.color1
                span #[b Impresoras:] Las impresoras compartidas son accesibles desde cualquier dispositivo en la red, facilitando su uso por parte de varios usuarios sin la necesidad de conexiones directas.
              li 
                i.fas.fa-check.color1
                span #[b Unidades de red:] Una unidad de red es un espacio de almacenamiento asignado a un usuario o grupo, accesible desde cualquier equipo en la red. Es útil para almacenar documentos y datos importantes de manera centralizada.

      .py-3.py-md-4.bg11(titulo="Configuración y permisos")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/39.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Configuración y permisos
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b Permisos de acceso:] Los administradores pueden configurar diferentes niveles de permisos, como acceso solo de lectura o permisos completos para modificar y eliminar archivos.
              li 
                i.fas.fa-check.color1
                span #[b Seguridad de los recursos:] Es importante proteger los recursos compartidos mediante autenticación y control de acceso, asegurándose de que solo las personas autorizadas puedan utilizarlos.

      .py-3.py-md-4.bg11(titulo="Buenas prácticas")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/40.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Buenas prácticas
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b Organización de carpetas:] Mantener una estructura de carpetas bien organizada ayuda a los usuarios a encontrar y gestionar archivos de manera eficiente.
              li 
                i.fas.fa-check.color1
                span #[b Monitoreo y auditoría:] Utilizar herramientas para monitorear el uso de los recursos compartidos y realizar auditorías de seguridad periódicas.   

    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Políticas de grupo

    p.mb-5 Las Políticas de Grupo (Group Policy) son una característica de Windows que permite a los administradores controlar de manera centralizada las configuraciones y restricciones de los equipos y usuarios en un dominio.

    .row.bg4.align-items-center.mb-5
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-8.my-lg-0.my-3
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
              div(titulo="Funciones de las políticas de grupo")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Configuración de seguridad:] Los administradores pueden aplicar políticas para exigir contraseñas seguras, bloquear dispositivos externos como unidades USB, y definir restricciones de acceso.
                  li 
                    i.fas.fa-check.color1
                    span #[b Configuración de escritorio:] Se pueden establecer configuraciones específicas, como la apariencia del escritorio, programas predeterminados y restricciones en el menú de inicio.
                  li 
                    i.fas.fa-check.color1
                    span #[b Automatización de tareas:] Las políticas de grupo permiten automatizar tareas comunes, como la instalación de #[i software] o la actualización de configuraciones de red.
              div(titulo="Ejemplos de uso")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Restringir el acceso a aplicaciones:] Se pueden bloquear aplicaciones no autorizadas para proteger los equipos de #[i software] malicioso o no deseado.
                  li 
                    i.fas.fa-check.color1
                    span #[b Configuración de red:] Aplicar configuraciones de red predefinidas a todos los dispositivos, como la asignación de servidores DNS o la configuración de proxy.
                  li 
                    i.fas.fa-check.color1
                    span #[b Bloqueo de dispositivos:] Restringir el uso de dispositivos externos para proteger la red de posibles infecciones de #[i malware].
              div(titulo="Administración de políticas de grupo")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Consola de gestión:] La consola de gestión de políticas de grupo permite crear y aplicar políticas de manera centralizada. Las políticas pueden aplicarse a toda la organización o a grupos específicos según las necesidades.
                  li 
                    i.fas.fa-check.color1
                    span #[b Actualización de políticas:] Las políticas de grupo se aplican automáticamente al iniciar sesión o mediante comandos de actualización, garantizando que todos los dispositivos cumplan con las configuraciones establecidas.    
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/41.png' alt='')   
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 2. 
          span Ejemplos de configuraciones de políticas de grupo y su impacto

        .tabla-a.color-acento-botones.text-center.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Configuración de política
                th Descripción 
                th Impacto en la red 

            tbody
              tr
                td.fst-bold.bgt1 Contraseñas seguras obligatorias
                td Exige que las contraseñas tengan una longitud mínima, combinando letras, números y símbolos.
                td Mejora la seguridad al dificultar los intentos de acceso no autorizado.

              tr
                td.fst-bold.bgt1 Bloqueo de dispositivos USB
                td Restringe el uso de dispositivos de almacenamiento USB para evitar la transferencia de datos no autorizados.
                td Previene el robo de información y la infección por #[i malware] desde USB.

              tr
                td.fst-bold.bgt1 Actualización automática de #[i software] 
                td Fuerza a todos los equipos a instalar actualizaciones del sistema operativo y #[i software] de seguridad.
                td Mantiene todos los dispositivos actualizados y protegidos contra vulnerabilidades.

              tr
                td.fst-bold.bgt1 Configuración del Firewall
                td Establece reglas específicas para el firewall en cada dispositivo de la red, permitiendo o denegando tráfico según las necesidades de seguridad.
                td Controla el tráfico de red y protege los dispositivos de accesos maliciosos.
                
              tr
                td.fst-bold.bgt1 Acceso restringido a Panel de Control y Configuración
                td Impide que los usuarios realicen cambios en la configuración del sistema.
                td Evita alteraciones que puedan comprometer el rendimiento o la seguridad.

              tr
                td.fst-bold.bgt1 Configuración de proxy en navegadores 
                td Define automáticamente el servidor proxy que deben usar los navegadores en la red. 
                td Controla y monitorea el tráfico de Internet, mejorando la seguridad y la administración del uso de la red. 

              tr
                td.fst-bold.bgt1 Deshabilitar el uso de aplicaciones específicas 
                td Prohíbe la ejecución de #[i software] no autorizado, como programas de entretenimiento o aplicaciones de alto riesgo.
                td Reduce el riesgo de ejecutar aplicaciones maliciosas y mejora la productividad.

              tr
                td.fst-bold.bgt1 Control de acceso a recursos compartidos
                td Configura permisos específicos para que solo ciertos usuarios o grupos puedan acceder a carpetas y archivos en la red.
                td Protege datos sensibles y organiza el acceso según las necesidades del usuario.

              tr
                td.fst-bold.bgt1 Desconexión automática por inactividad
                td Cierra automáticamente la sesión de los usuarios después de un período de inactividad.
                td Aumenta la seguridad al reducir la exposición en dispositivos desatendidos.                                                                                                                                
</template>

<script>
import TabsC from '../bootstrap/TabsC'
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema4',
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
