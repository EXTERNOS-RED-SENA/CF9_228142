<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Configuración de sistemas operativos

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/13.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La correcta configuración de los sistemas operativos es fundamental para asegurar que los equipos de cómputo funcionen de manera óptima, segura y eficiente. En esta sección, se detallan los aspectos de la configuración, desde el arranque hasta la optimización del rendimiento.      


    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 BIOS/UEFI
    .row.justify-content-center.mb-5 
      .col-lg-9.my-lg-0.my-3
        p La BIOS (Basic Input/Output System) y la UEFI (Unified Extensible Firmware Interface) son sistemas fundamentales que inician el #[i hardware] de un equipo y preparan el entorno para que el sistema operativo se cargue. Entender la función de ambos sistemas y cómo configurarlos es fundamental para optimizar el rendimiento y la seguridad de los equipos.
        .bg5.p-4.brad
          p.mb-0 La BIOS es el firmware tradicional que controla las funciones básicas del #[i hardware] de la computadora. Cuando se enciende un equipo, la BIOS ejecuta una serie de pruebas conocidas como POST (Power-On Self Test) para asegurarse de que los principales componentes, como el procesador, la memoria RAM y los discos duros, estén funcionando correctamente.
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/14.png' alt='') 

    .row.bg6.align-items-center.mb-5
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5.d-none.d-lg-block
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Interfaz de configuración: 
                p La BIOS ofrece una interfaz simple basada en texto a la que se accede presionando una tecla específica (como F2, F10 o Delete) durante el arranque. Desde esta interfaz, se pueden ajustar configuraciones básicas, como el orden de arranque, la gestión de dispositivos, y las opciones de seguridad.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Configuraciones comunes: 
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Orden de arranque:] Permite elegir el dispositivo desde el cual se iniciará el sistema operativo (disco duro, unidad USB, CD/DVD, etc.).
                  li 
                    i.fas.fa-check.color1
                    span #[b Configuración de dispositivos:] Habilita o deshabilita componentes como puertos USB, tarjetas de red, y dispositivos de almacenamiento. 
                  li 
                    i.fas.fa-check.color1
                    span #[b Opciones de seguridad:] Incluyen la configuración de contraseñas para proteger el acceso a la BIOS y al equipo.

                p Aunque la BIOS ha sido un estándar durante décadas, tiene algunas limitaciones, como el soporte para particiones de disco mayores de 2 TB y una interfaz anticuada.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/17.png', alt='') 
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 UEFI: Avances y beneficios
                p La UEFI es la evolución moderna de la BIOS, diseñada para superar sus limitaciones y ofrecer una experiencia más segura y flexible. La UEFI tiene una arquitectura más avanzada, permitiendo tiempos de arranque más rápidos, un mejor manejo de #[i hardware] moderno y soporte para interfaces gráficas.
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Interfaz gráfica y usabilidad:] A diferencia de la BIOS, la UEFI proporciona una interfaz gráfica más intuitiva, con soporte para mouse y configuraciones avanzadas que son más fáciles de manejar.
                  li 
                    i.fas.fa-check.color1
                    span #[b Compatibilidad con discos grandes:] La UEFI puede gestionar particiones de disco de hasta 9.4 zettabytes, lo que la hace ideal para sistemas modernos que usan discos de alta capacidad. 
                  li 
                    i.fas.fa-check.color1
                    span #[b Funciones de seguridad mejoradas:] Una de las características más importantes de la UEFI es el Secure Boot, que impide que se cargue #[i software] malicioso durante el arranque. Esta función verifica la firma de los sistemas operativos y aplicaciones de arranque, asegurando que solo se ejecute #[i software] confiable.                                                         
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='') 
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Configuraciones Importantes en UEFI:
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Modo de arranque:] La UEFI permite seleccionar entre el modo de arranque UEFI o Legacy (compatibilidad con BIOS antigua). Se debe elegir el modo adecuado según el sistema operativo instalado.
                  li 
                    i.fas.fa-check.color1
                    span #[b Administración de hardware:] Se pueden realizar configuraciones avanzadas para gestionar mejor el rendimiento del procesador, la memoria, y las tarjetas gráficas.
                  li 
                    i.fas.fa-check.color1
                    span #[b Actualización de firmware:] La UEFI facilita las actualizaciones de firmware, que son necesarias para mantener la compatibilidad con #[i hardware] nuevo y corregir vulnerabilidades de seguridad.                                                         
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/19.png', alt='') 
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Diferencias entre BIOS y UEFI:
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span #[b Velocidad de arranque:] La UEFI ofrece tiempos de arranque más rápidos debido a su diseño optimizado.
                  li 
                    i.fas.fa-check.color1
                    span #[b Seguridad:] UEFI proporciona medidas de seguridad adicionales como el Secure Boot, mientras que la BIOS carece de estas funciones avanzadas.
                  li 
                    i.fas.fa-check.color1
                    span #[b Interfaz:] La BIOS utiliza una interfaz de texto básica, mientras que la UEFI ofrece una experiencia gráfica con soporte para mouse.                                                           
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/20.png', alt='')                                                       


        .bgw.brad.p-4.my-5.d-block.d-lg-none
          .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Interfaz de configuración: 
              p La BIOS ofrece una interfaz simple basada en texto a la que se accede presionando una tecla específica (como F2, F10 o Delete) durante el arranque. Desde esta interfaz, se pueden ajustar configuraciones básicas, como el orden de arranque, la gestión de dispositivos, y las opciones de seguridad.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='') 
        .bgw.brad.p-4.my-5.d-block.d-lg-none               
          .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Configuraciones comunes: 
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-check.color1
                  span #[b Orden de arranque:] Permite elegir el dispositivo desde el cual se iniciará el sistema operativo (disco duro, unidad USB, CD/DVD, etc.).
                li 
                  i.fas.fa-check.color1
                  span #[b Configuración de dispositivos:] Habilita o deshabilita componentes como puertos USB, tarjetas de red, y dispositivos de almacenamiento. 
                li 
                  i.fas.fa-check.color1
                  span #[b Opciones de seguridad:] Incluyen la configuración de contraseñas para proteger el acceso a la BIOS y al equipo.

              p Aunque la BIOS ha sido un estándar durante décadas, tiene algunas limitaciones, como el soporte para particiones de disco mayores de 2 TB y una interfaz anticuada.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/17.png', alt='') 
        .bgw.brad.p-4.my-5.d-block.d-lg-none              
          .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 UEFI: Avances y beneficios
              p La UEFI es la evolución moderna de la BIOS, diseñada para superar sus limitaciones y ofrecer una experiencia más segura y flexible. La UEFI tiene una arquitectura más avanzada, permitiendo tiempos de arranque más rápidos, un mejor manejo de #[i hardware] moderno y soporte para interfaces gráficas.
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-check.color1
                  span #[b Interfaz gráfica y usabilidad:] A diferencia de la BIOS, la UEFI proporciona una interfaz gráfica más intuitiva, con soporte para mouse y configuraciones avanzadas que son más fáciles de manejar.
                li 
                  i.fas.fa-check.color1
                  span #[b Compatibilidad con discos grandes:] La UEFI puede gestionar particiones de disco de hasta 9.4 zettabytes, lo que la hace ideal para sistemas modernos que usan discos de alta capacidad. 
                li 
                  i.fas.fa-check.color1
                  span #[b Funciones de seguridad mejoradas:] Una de las características más importantes de la UEFI es el Secure Boot, que impide que se cargue #[i software] malicioso durante el arranque. Esta función verifica la firma de los sistemas operativos y aplicaciones de arranque, asegurando que solo se ejecute #[i software] confiable.                                                         
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='')
        .bgw.brad.p-4.my-5.d-block.d-lg-none               
          .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Configuraciones Importantes en UEFI:
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-check.color1
                  span #[b Modo de arranque:] La UEFI permite seleccionar entre el modo de arranque UEFI o Legacy (compatibilidad con BIOS antigua). Se debe elegir el modo adecuado según el sistema operativo instalado.
                li 
                  i.fas.fa-check.color1
                  span #[b Administración de hardware:] Se pueden realizar configuraciones avanzadas para gestionar mejor el rendimiento del procesador, la memoria, y las tarjetas gráficas.
                li 
                  i.fas.fa-check.color1
                  span #[b Actualización de firmware:] La UEFI facilita las actualizaciones de firmware, que son necesarias para mantener la compatibilidad con #[i hardware] nuevo y corregir vulnerabilidades de seguridad.                                                         
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/19.png', alt='')
        .bgw.brad.p-4.my-5.d-block.d-lg-none               
          .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Diferencias entre BIOS y UEFI:
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-check.color1
                  span #[b Velocidad de arranque:] La UEFI ofrece tiempos de arranque más rápidos debido a su diseño optimizado.
                li 
                  i.fas.fa-check.color1
                  span #[b Seguridad:] UEFI proporciona medidas de seguridad adicionales como el Secure Boot, mientras que la BIOS carece de estas funciones avanzadas.
                li 
                  i.fas.fa-check.color1
                  span #[b Interfaz:] La BIOS utiliza una interfaz de texto básica, mientras que la UEFI ofrece una experiencia gráfica con soporte para mouse.                                                           
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/20.png', alt='')                         


    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Sistemas de arranque

    p.mb-5 El sistema de arranque es el proceso mediante el cual un equipo de cómputo carga el sistema operativo y lo prepara para ser utilizado. Una configuración adecuada del sistema de arranque garantiza que el equipo inicie correctamente y pueda acceder a los recursos necesarios.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="Tipos de sistemas de arranque")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/21.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Tipos de sistemas de arranque
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b Arranque dual (Dual Boot):] Permite tener instalados dos sistemas operativos en un solo equipo y elegir cuál cargar al inicio. Esto es útil cuando se necesita trabajar con diferentes sistemas, como Windows y Linux.
              li 
                i.fas.fa-check.color1
                span #[b Arranque desde dispositivos externos:] Configurar el equipo para que pueda arrancar desde dispositivos externos, como unidades USB o discos ópticos, se hace necesario para tareas de recuperación y mantenimiento. Esta opción se establece en la BIOS/UEFI y se prioriza según la necesidad.
      .py-3.py-md-4.bg11(titulo="Configuración del gestor de arranque")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/22.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Configuración del gestor de arranque
            p El gestor de arranque es un programa que permite seleccionar qué sistema operativo se cargará en un equipo con arranque dual. Ejemplos comunes de gestores de arranque son GRUB (utilizado en Linux) y Windows Boot Manager.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b Modificar el orden de arranque:] Cambiar la prioridad de los dispositivos desde el gestor de arranque, en caso de que se necesite iniciar desde un disco duro secundario o una unidad USB. 
              li 
                i.fas.fa-check.color1
                span #[b Configuraciones avanzadas:] Algunos gestores de arranque permiten opciones como tiempo de espera para la selección de un sistema operativo predeterminado o ajustes personalizados para arrancar en modo seguro.
      .py-3.py-md-4.bg11(titulo="Problemas comunes y soluciones")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/23.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Problemas comunes y soluciones
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check.color1
                span #[b Error en el gestor de arranque:] A veces, el gestor de arranque puede corromperse debido a actualizaciones fallidas o instalaciones incorrectas. Herramientas como el Disco de Reparación de Windows o comandos como boot-repair en Linux pueden ayudar a solucionar estos problemas.
              li 
                i.fas.fa-check.color1
                span #[b No se detecta el sistema operativo:] Verificar que el sistema operativo esté correctamente instalado y que el disco sea reconocido por la BIOS/UEFI. También puede ser necesario reparar el MBR (Master Boot Record) o la tabla de particiones.                

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Optimización de rendimiento

    .row.justify-content-center.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/24.png' alt='')
      .col.pt-lg-0.pt-md-4
        .bg2.p-4.brad
          p.mb-0 La optimización del rendimiento del sistema operativo es un proceso continuo que involucra ajustes y configuraciones para asegurar que los recursos de #[i hardware] sean utilizados de manera eficiente. Una buena optimización mejora la velocidad, la estabilidad y la experiencia del usuario. 


    .row.bg4.align-items-center
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-3.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/25.png' alt='')           
          .col-lg-9.my-lg-0.my-3
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
              div(titulo="Configuraciones para mejorar el rendimiento")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span Deshabilitar programas de inicio innecesarios: Muchos programas se configuran para iniciarse automáticamente con el sistema operativo, lo que puede ralentizar el arranque. Utilizar el Administrador de tareas de Windows o herramientas equivalentes en otros sistemas para deshabilitar programas que no son indispensables.
                  li 
                    i.fas.fa-check.color1
                    span Ajustar las opciones de energía: Configurar el plan de energía adecuado según las necesidades del usuario. Por ejemplo, en portátiles, se puede seleccionar un plan de alto rendimiento cuando se necesita la máxima potencia o un plan de ahorro de energía para prolongar la duración de la batería.   
                  li 
                    i.fas.fa-check.color1
                    span Limpieza de disco: Usar herramientas como Liberador de espacio en disco en Windows o BleachBit en Linux para eliminar archivos temporales, caché y otros elementos innecesarios que ocupan espacio.                 
              div(titulo="Optimización del uso de memoria (RAM)")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span Administrar procesos en segundo plano: Identificar y cerrar aplicaciones que consumen mucha memoria a través del Administrador de Tareas o el Monitor de Recursos. En sistemas como Linux, se pueden usar comandos como htop para gestionar procesos. 
                  li 
                    i.fas.fa-check.color1
                    span Aumentar el tamaño de la memoria virtual: En algunos casos, se puede mejorar el rendimiento aumentando la memoria virtual, que es un espacio en el disco duro que actúa como un complemento de la RAM. Esto se configura desde las opciones avanzadas del sistema operativo.                    
              div(titulo="Actualizaciones de <i>software</i>")
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check.color1
                    span Actualizar el sistema operativo: Mantener el sistema operativo actualizado es fundamental para garantizar el rendimiento y la seguridad. Las actualizaciones corrigen vulnerabilidades y optimizan el uso de recursos. 
                  li 
                    i.fas.fa-check.color1
                    span Controladores de #[i hardware]: Asegurarse de que los controladores de los dispositivos estén actualizados. Esto incluye la tarjeta gráfica, el adaptador de red y otros periféricos que pueden afectar el rendimiento del sistema.                    
              div(titulo="Desfragmentación y optimización del disco")
                p En sistemas con discos duros mecánicos (HDD), la desfragmentación organiza los archivos de manera que se acceda a ellos más rápidamente. En sistemas con unidades de estado sólido (SSD), la desfragmentación no es necesaria, pero existen herramientas de optimización que pueden prolongar la vida útil del disco.
                                     

</template>

<script>
import SlyderA from '../bootstrap/SlyderA'
import TabsC from '../bootstrap/TabsC'
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema2',
  components: { TabsC, SlyderA, AcordionA },
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
