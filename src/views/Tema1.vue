<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Virtualización de sistemas
      
    .row.justify-content-center.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/4.png' alt='')
      .col.pt-lg-0.pt-md-4
        .bg2.p-4.brad
          p.mb-0 La virtualización de sistemas ha transformado el uso de los recursos de #[i hardware], permitiendo a las organizaciones y usuarios gestionar múltiples entornos de manera eficiente y flexible. Este capítulo explorará en profundidad los tipos de virtualización, las plataformas disponibles, y las mejores prácticas para la gestión de recursos virtuales.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 1.
          span Equipos de certificación y parámetros de medición
        
        .bgfig.p-5.brad.mb-2
          img.img-a.img-t(src='@/assets/curso/temas/5.svg' alt='La Figura 1 se denomina «Virtualización de sistemas y su gestión» y presenta un resumen detallado de los principales conceptos relacionados con la virtualización de sistemas, incluyendo los tipos de virtualización, las plataformas utilizadas y las mejores prácticas para la gestión de recursos.') 
        figcaption Fuente: OIT, 2024. 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Tipos de virtualización 

    p.mb-5 La virtualización abarca varias categorías, y cada una se aplica a diferentes contextos y necesidades tecnológicas:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="Virtualización de <i>hardware</i>")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/5.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Virtualización de #[i hardware]: 
            p.mb-0 Este tipo permite la creación de múltiples máquinas virtuales que operan como sistemas independientes en un solo servidor físico. Cada máquina virtual tiene su propio sistema operativo, lo que facilita la consolidación de servidores y reduce costos operativos. Las organizaciones suelen usar esta virtualización para optimizar el uso de recursos físicos, facilitar el mantenimiento y mejorar la disponibilidad de los servicios. 
      .py-3.py-md-4.bg11(titulo="Virtualización de aplicaciones")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/6.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Virtualización de aplicaciones:
            p.mb-0 Aquí, las aplicaciones se ejecutan en entornos aislados, eliminando conflictos con el sistema operativo o con otras aplicaciones instaladas. Esto es útil en entornos corporativos donde se requiere que diferentes versiones del #[i software] funcionen sin interferencias. Ejemplos de esta tecnología incluyen herramientas como #[i Microsoft App-V o VMware ThinApp.]
      .py-3.py-md-4.bg11(titulo="Virtualización de red")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/7.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Virtualización de red:
            p.mb-0 Esta categoría divide una red física en múltiples redes virtuales, o agrupa múltiples redes físicas en una sola red virtualizada. Con este enfoque, se puede gestionar el tráfico de red de manera más eficiente, mejorando la seguridad y la flexibilidad. Ejemplos incluyen la creación de VLANs y el uso de SDN (#[i Software-Defined Networking]) para gestionar redes de manera dinámica.
      .py-3.py-md-4.bg11(titulo="Virtualización de almacenamiento")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/8.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Virtualización de almacenamiento:
            p.mb-0 Aquí, el almacenamiento físico se combina y se presenta como un único recurso gestionado. Esto simplifica la administración y permite la asignación dinámica del espacio según las necesidades. Las soluciones de virtualización de almacenamiento son comunes en grandes centros de datos y entornos corporativos que requieren un acceso flexible a grandes volúmenes de datos.

    .row.justify-content-center
      .col-lg-8
        .row.justify-content-center.bg1.p-4.brad.mb-5
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/9.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Cada tipo de virtualización tiene ventajas y desafíos específicos, y su implementación debe ser cuidadosamente planificada para maximizar los beneficios y minimizar los posibles problemas.  

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Plataformas virtuales

    p.mb-5 Las plataformas virtuales permiten implementar soluciones de virtualización con distintas capacidades y características. A continuación, se describen algunas de las más reconocidas: 

    .row.bg4.align-items-center.mb-5
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-8.my-lg-0.my-3
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
              div(titulo="VMware ")
                p Una de las plataformas líderes en el sector de la virtualización. Ofrece soluciones como VMware Workstation, #[i VMware ESXi y vSphere], que permiten gestionar entornos de servidores complejos. #[i VMware] es muy valorada por su capacidad de recuperación ante desastres y las funcionalidades avanzadas de administración.   
              div(titulo="Microsoft <i>Hyper-V</i> ")
                p Esta plataforma, incluida en los sistemas operativos Windows Server, permite virtualizar tanto servidores como escritorios. #[i Hyper-V] es conocida por su integración con otros servicios de Microsoft, facilitando la gestión y seguridad en redes corporativas.  
              div(titulo="<i>VirtualBox</i> ")
                p Desarrollado por #[i Oracle, VirtualBox] es una herramienta de código abierto que soporta múltiples sistemas operativos en un entorno virtualizado. Es ampliamente utilizada por desarrolladores y estudiantes para realizar pruebas y ejecutar entornos de desarrollo.  
              div(titulo="KVM (<i>Kernel-based Virtual Machine</i>) ")
                p Una solución de virtualización de código abierto que convierte el #[i kernel] de Linux en un hipervisor. KVM es ideal para entornos empresariales que requieren estabilidad y eficiencia, y es compatible con muchas distribuciones de Linux.  
              div(titulo="Proxmox VE ")
                p Una plataforma de virtualización de código abierto que permite la gestión de máquinas virtuales y contenedores. Es conocida por su interfaz web intuitiva y sus funciones de alta disponibilidad, respaldo y replicación.                                                                                                
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/11.png' alt='') 

    .row.justify-content-center
      .col-lg-8
        .row.justify-content-center.bg1.p-4.brad.mb-5
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/9.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Estas plataformas se eligen según las necesidades de rendimiento, presupuesto y compatibilidad del entorno en el que se van a utilizar. 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Gestión de recursos virtuales

    p.mb-5 Una gestión adecuada de los recursos virtuales es necesaria para mantener el rendimiento y la estabilidad de los sistemas virtualizados. Aquí se explican las principales estrategias y herramientas:

    .row.bg4.align-items-center
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-3.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/12.png' alt='')           
          .col-lg-9.my-lg-0.my-3
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
              div(titulo="Asignación de CPU y memoria ")
                p Una de las tareas críticas en la gestión de entornos virtuales es asignar los recursos de CPU y memoria de manera eficiente. Esto implica distribuir los recursos físicos del servidor según las demandas de cada máquina virtual, evitando la sobreasignación, que puede degradar el rendimiento del sistema.
              div(titulo="Monitoreo de rendimiento")
                p Las herramientas de monitoreo permiten analizar en tiempo real el uso de recursos, identificar cuellos de botella y tomar decisiones informadas para ajustar las configuraciones. Las métricas incluyen el uso de la CPU, memoria, almacenamiento y la latencia de la red.
              div(titulo="Gestión de almacenamiento")
                p En un entorno virtual, el almacenamiento es un recurso compartido que debe administrarse cuidadosamente. Se pueden usar tecnologías como el aprovisionamiento fino (thin provisioning) para asignar espacio de manera dinámica según sea necesario, evitando el desperdicio de recursos y mejorando la eficiencia del almacenamiento. 
              div(titulo="Optimización del tráfico de red")
                p Configurar las redes virtuales para minimizar la latencia y el congestionamiento es fundamental. Esto se logra mediante la segmentación de redes, el uso de conmutadores virtuales y la priorización del tráfico basado en las necesidades de cada máquina virtual.
              div(titulo="Planificación de recursos")
                p Anticipar el crecimiento y las futuras necesidades de los recursos es vital para garantizar que el entorno virtualizado pueda escalar sin problemas. Esto incluye prever actualizaciones de #[i hardware] y ajustar las configuraciones según el uso proyectado.                                                  
                      
</template>

<script>
import TabsC from '../bootstrap/TabsC'
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema1',
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
