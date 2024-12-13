export default {
  global: {
    componenteFormativo: 'Parametrización de <i>hardware</i> y <i>software</i>',
    descripcionCurso:
      'El presente componente enseña a configurar y optimizar sistemas informáticos de manera eficiente. Aborda la virtualización de recursos, la gestión avanzada de sistemas operativos, la implementación de medidas de seguridad para proteger dispositivos, y la administración efectiva de redes. Se desarrollarán habilidades prácticas para mejorar el rendimiento, garantizar la seguridad de los equipos y enfrentar desafíos tecnológicos en diversos entornos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Virtualización de sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de virtualización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plataformas virtuales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Gestión de recursos virtuales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Configuración de sistemas operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'BIOS/UEFI',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Sistemas de arranque',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Optimización de rendimiento',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad de punto final',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Antivirus y antimalware',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Políticas de seguridad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Control de acceso',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Directorio activo y dominios',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Recursos compartidos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Políticas de grupo',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF09_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Virtualización de sistemas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, octubre 17). <i>Virtualización CPU</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lGLzCzgrcF8',
    },
    {
      tema: '1. Virtualización de sistemas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 23). <i>Los sistemas operativos por su estructura: Visión interna</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RjuFT03PSyw',
    },
    {
      tema: '2. Configuración de sistemas operativos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, octubre 24).<i> Gestión de equipos informáticos</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dJ0rNne1xuY.',
    },
    {
      tema: '2. Configuración de sistemas operativos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, octubre 18). <i>Características de los sistemas operativos</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TGYx-geVl8E',
    },
    {
      tema: '3. Seguridad de punto final',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, 2 octubre). <i>Herramientas y estrategias de protección: antivirus gratuitos</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jqL1RwFft-0',
    },
    {
      tema: '3. Seguridad de punto final',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024, 3 abril). <i>Seguridad perimetral</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=l5_sSIAD8Wo',
    },
    {
      tema: '4. Gestión de red',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, abril 17). <i>Sistemas operativos en red</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oy1cr57wi5M',
    },
  ],
  glosario: [
    {
      termino: 'Antivirus',
      significado:
        '<i>Software</i> diseñado para detectar, prevenir y eliminar programas maliciosos que puedan dañar el sistema o robar información.',
    },
    {
      termino: 'Aprovisionamiento fino (<i>Thin Provisioning</i>)',
      significado:
        'Técnica de gestión de almacenamiento que asigna espacio dinámicamente, evitando el desperdicio de recursos.',
    },
    {
      termino: 'Arranque dual (<i>Dual Boot</i>)',
      significado:
        'Configuración que permite tener múltiples sistemas operativos instalados en un mismo equipo y elegir cuál arrancar.',
    },
    {
      termino: 'BIOS',
      significado:
        '<i>Firmware</i> básico que inicializa el <i>hardware</i> del sistema y carga el sistema operativo al encender el equipo.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'Medidas y mecanismos que limitan quién puede acceder a ciertos datos o recursos dentro de un sistema.',
    },
    {
      termino: 'Directorio Activo (<i>Active Directory</i>)',
      significado:
        'Servicio de Microsoft que centraliza la administración de usuarios, equipos y recursos en una red basada en Windows.',
    },
    {
      termino: '<i>Firewall</i>',
      significado:
        'Sistema de seguridad que controla el tráfico de red, permitiendo o bloqueando conexiones según reglas definidas.',
    },
    {
      termino: 'Gestión de red',
      significado:
        'Proceso de administrar y optimizar la conectividad y el acceso a recursos en una red informática.',
    },
    {
      termino: 'Gestor de arranque',
      significado:
        'Programa que permite seleccionar qué sistema operativo iniciar en equipos con arranque dual.',
    },
    {
      termino: 'Memoria virtual',
      significado:
        'Espacio en el disco duro que actúa como un complemento de la memoria RAM, utilizado cuando la RAM está llena.',
    },
    {
      termino: 'Políticas de Grupo (<i>Group Policy</i>)',
      significado:
        'Configuraciones de Windows que permiten a los administradores gestionar y controlar el entorno de trabajo de los usuarios y equipos.',
    },
    {
      termino: 'Protección web',
      significado:
        'Característica de los antivirus que bloquea el acceso a sitios web maliciosos para proteger la seguridad del usuario.',
    },
    {
      termino: 'Recursos compartidos',
      significado:
        'Archivos, carpetas, impresoras o dispositivos accesibles para varios usuarios en una red.',
    },
    {
      termino: '<i>Secure Boot</i>',
      significado:
        'Función de seguridad de UEFI que verifica la autenticidad del software de arranque para prevenir la carga de <i>malware<i>.',
    },
    {
      termino: 'Segmentación de red',
      significado:
        'División de una red en segmentos más pequeños y seguros para mejorar la gestión y proteger el tráfico de datos.',
    },
    {
      termino: 'UEFI',
      significado:
        'Interfaz de <i>firmware</i> moderna que reemplaza al BIOS, proporcionando una interfaz gráfica y mayor seguridad.',
    },
    {
      termino: 'VirtualBox',
      significado:
        '<i>Software</i> de virtualización de código abierto que permite ejecutar múltiples sistemas operativos en un solo equipo.',
    },
    {
      termino: 'Virtualización',
      significado:
        'Tecnología que permite ejecutar múltiples sistemas operativos o aplicaciones en un solo servidor físico mediante máquinas virtuales.',
    },
    {
      termino: 'VLAN (<i>Virtual Local Area Network</i>)',
      significado:
        'Tecnología que crea redes separadas dentro de una misma infraestructura física, mejorando la seguridad y eficiencia del tráfico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrews, J. (2019). Guía A+ para el Soporte Técnico en TI (Hardware y Software) (9ª ed.). Cengage Learning.',
    },
    {
      referencia:
        'Aranda Córdoba, J. R. (2015). Desarrollo y reutilización de componentes software y multimedia mediante lenguajes de guión. IC Editorial.',
    },
    {
      referencia:
        'Aranda Vera, Á. (2015). Instalación y parametrización del software. IC Editorial.',
    },
    {
      referencia:
        'Caicedo Rendón, A. M., Pino Correa, F. J., & Pino Anacona, A. F. (2018). ISO/IEC 29110 para procesos software en las pequeñas empresas. AENOR.',
    },
    {
      referencia: 'Dembowski, K. (2003). El Gran Libro de Hardware. Marcombo.',
    },
    {
      referencia:
        'Díaz Coca, M. J. (2016). Desarrollo de componentes software para el manejo de dispositivos. IC Editorial.',
    },
    {
      referencia:
        'Eito Brun, R., & Sicilia Urbán, M. (2020). Gestión de innovación y procesos software: normativa y mejores prácticas. Servicio de Publicaciones, Universidad de Alcalá.',
    },
    {
      referencia:
        'García Bermúdez, J. C. (2016). Diseño de elementos software con tecnologías basadas en componentes. IC Editorial.',
    },
    {
      referencia:
        'Manovich, L. (2014). El software toma el mando. Editorial UOC.',
    },
    {
      referencia:
        'Moreno Pérez, J. C. (2015). Administración de software de un sistema informático. RA-MA Editorial.',
    },
    {
      referencia:
        'Patterson, D. A., & Hennessy, J. L. (2018). Estructura y diseño de computadores: La interfaz hardware/software (4ª ed.). Reverté.',
    },
    {
      referencia:
        'Pérez Carvajal, R. J. (2016). Mantenimiento del software. IC Editorial.',
    },
    {
      referencia:
        'Piattini Velthuis, M., & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización. RA-MA Editorial.',
    },
    {
      referencia:
        'Piattini Velthuis, M., Vizcaíno Barceló, A., & García Rubio, F. O. (2014). Desarrollo global de software. RA-MA Editorial.',
    },
    {
      referencia:
        'Pressman, R. S. (2010). Ingeniería del software: Un enfoque práctico (7ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Rodríguez Monje, M. J., Pino, F., & Rodríguez Monje, M. (2018). Modelo de madurez de ingeniería del software Versión 2.0 (MMIS V.2). AENOR.',
    },
    {
      referencia:
        'Rodríguez Villalobos, A. (2017). Grafos: software para la construcción, edición y análisis de grafos. Bubok Publishing S.L.',
    },
    {
      referencia:
        'Saavedra Fernández, T. (2015). Selección, instalación y configuración del software de servidor de mensajería electrónica. IC Editorial.',
    },
    {
      referencia:
        'Salazar Torres, J. A., & Ibañez Olvera, M. (2015). Simulación de una descarga eléctrica a través de software libre. Ediciones y Gráficos Eón.',
    },
    {
      referencia:
        'Silberschatz, A., Galvin, P. B., & Gagne, G. (2014). Fundamentos de sistemas operativos (9ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Sommerville, I. (2011). Ingeniería del software (9ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Stallings, W. (2015). Organización y arquitectura de computadores (9ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Tanenbaum, A. S., & Bos, H. (2015). Sistemas operativos modernos (4ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Ullman, J. D., & Widom, J. (2013). Fundamentos de bases de datos (4ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Villada Romero, J. L. (2016). Instalación y configuración del software de servidor web. IC Editorial.',
    },
    {
      referencia:
        'Villar Cueli, J., & Huércano Ruíz, F. (2014). Implementación e integración de elementos software con tecnologías basadas en componentes. IC Editorial.',
    },
  ],
}
