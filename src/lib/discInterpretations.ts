/**
 * Interpretaciones detalladas de perfiles DISC
 * Basadas en el modelo DISC clásico de 28 bloques
 */

export interface DISCProfileDetail {
  nombre: string;
  alias: string;
  emociones: string;
  meta: string;
  juzgaALosDemasPor: string;
  influyeEnLosDemasMediante: string;
  suValorParaLaOrganizacion: string;
  abusaDe: string;
  bajoPresion: string;
  teme: string;
  seriaEficazSi: string;
  descripcionNarrativa: string;
  fortalezas: string[];
  areasMejora: string[];
  motivadores: string[];
  estilo: 'D' | 'I' | 'S' | 'C' | 'DI' | 'DC' | 'DS' | 'ID' | 'IS' | 'IC' | 'SD' | 'SI' | 'SC' | 'CD' | 'CI' | 'CS';
}

export const discProfiles: Record<string, DISCProfileDetail> = {
  'Alto C': {
    nombre: 'El Analista - Perfil alto en Cumplimiento',
    alias: 'Objetivo - El Pensador Analítico',
    emociones: 'Puede rechazar la agresión interpersonal.',
    meta: 'La exactitud.',
    juzgaALosDemasPor: 'Su capacidad de pensamiento analítico.',
    influyeEnLosDemasMediante: 'La información objetiva, los argumentos lógicos.',
    suValorParaLaOrganizacion: 'Define, esclarece, obtiene información, evalúa, comprueba.',
    abusaDe: 'El análisis.',
    bajoPresion: 'Se vuelve aprensivo.',
    teme: 'Actos irracionales, el ridículo.',
    seriaEficazSi: 'Fuera más abierto, compartiera en público su perspicacia y opiniones.',
    descripcionNarrativa: `La capacidad de pensamiento crítico suele estar muy desarrollada en el Analista. Recalca la importancia de sacar conclusiones y basar las acciones en hechos. Busca la precisión y exactitud en todo lo que hace. Sin embargo, para llevar a cabo con eficiencia su trabajo, el Analista suele combinar la información intuitiva con los datos que posee. Cuando duda sobre el curso a tomar, evita hacer el ridículo preparándose meticulosamente. Por ejemplo, el Analista perfeccionará una nueva habilidad en privado antes de usarla en alguna actividad de grupo.

El Analista prefiere trabajar con personas que, como él, prefieren mantener un ambiente laboral tranquilo. Como puede mostrarse reticente en expresar sus sentimientos, hay quienes lo consideran tímido. Se siente particularmente incómodo ante personas agresivas. A pesar de esta apariencia templada, el Analista tiene una fuerte necesidad de controlar el ambiente. Suele ejercer este control en forma indirecta solicitando el apego a reglas y normas.

El Analista se preocupa por llegar a respuestas "correctas" y le puede resultar difícil tomar decisiones en situaciones ambiguas. Su tendencia a preocuparse le puede llevar a una "parálisis por análisis". Con demasiada frecuencia, cuando comete un error, titubea en reconocerlo y se empeña en buscar información que le permita apoyar su postura.`,
    fortalezas: [
      'Pensamiento crítico y analítico desarrollado',
      'Precisión y exactitud excepcionales',
      'Capacidad de evaluar y comprender datos complejos',
      'Meticulosidad en la preparación',
      'Preferencia por ambientes ordenados y claros',
      'Fidelidad a las normas y estándares establecidos'
    ],
    areasMejora: [
      'Tomar decisiones en situaciones ambiguas',
      'Ser más abierto con sus opiniones',
      'Compartir perspicacias de forma pública',
      'Ser más flexible ante cambios inesperados',
      'Expresar datos de forma más persuasiva y menos técnica',
      'Aceptar que no siempre hay respuesta "correcta"'
    ],
    motivadores: [
      'Trabajo que requiera precisión y análisis',
      'Datos claros y bien estructurados',
      'Reconocimiento de sus hallazgos e investigaciones',
      'Tiempo para preparación meticulosa',
      'Ambiente de trabajo estable y predecible',
      'Oportunidades de profundizar conocimiento'
    ],
    estilo: 'C'
  },

  'Alto D': {
    nombre: 'El Impulsor - Perfil alto en Dominancia',
    alias: 'Dominador - El Ejecutor de Resultados',
    emociones: 'Busca controlar situaciones y puede ser impaciente con la ineficiencia.',
    meta: 'Logros y resultados visibles.',
    juzgaALosDemasPor: 'Su capacidad para producir resultados.',
    influyeEnLosDemasMediante: 'Demostración directa de autoridad y competencia.',
    suValorParaLaOrganizacion: 'Impulsa el trabajo, produce resultados, resuelve problemas, toma control.',
    abusaDe: 'La velocidad sin consideración.',
    bajoPresion: 'Se vuelve dominante y controlador.',
    teme: 'La pérdida de control, la ineficiencia.',
    seriaEficazSi: 'Fuera más considerado con los sentimientos de otros, delegara más.',
    descripcionNarrativa: `El Impulsor es una fuerza motriz en cualquier organización. Está orientado hacia resultados visibles y medibles. Prefiere actuar rápidamente, incluso si esto significa correr algunos riesgos. Es competitivo por naturaleza y busca constantemente maneras de mejorar su posición o la de su equipo.

El Impulsor puede parecer insensible a los sentimientos de otros, pero esto no es intencional; simplemente tiene una visión del objetivo final que puede eclipsar consideraciones emocionales. Generalmente es directo en su comunicación, prefiriendo lo claro y conciso sobre lo ambiguo. Bajo presión, tiende a tomar aún más control de las situaciones.

Está motivado por el desafío y las oportunidades de demostrar su capacidad. El Impulsor asume responsabilidades voluntariamente y espera que otros hagan lo mismo. Para el Impulsor, el reconocimiento es importante pero se valida principalmente a través del logro concreto más que por el elogio.`,
    fortalezas: [
      'Orientación clara hacia resultados',
      'Toma de decisiones rápida y decidida',
      'Competencia y excelencia en la ejecución',
      'Liderazgo natural y autoridad',
      'Capacidad para asumir riesgos calculados',
      'Resolución eficiente de problemas'
    ],
    areasMejora: [
      'Desarrollar empatía con otros',
      'Escuchar activamente antes de decidir',
      'Delegación genuina en lugar de solo asignación',
      'Reconocer contribuciones de otros',
      'Considerar el bienestar del equipo',
      'Desarrollar paciencia con procesos'
    ],
    motivadores: [
      'Desafíos competitivos',
      'Responsabilidad y autoridad',
      'Resultados medibles y visibles',
      'Autonomía para actuar',
      'Reconocimiento del logro',
      'Oportunidades de avance'
    ],
    estilo: 'D'
  },

  'Alto I': {
    nombre: 'El Influyente - Perfil alto en Influencia',
    alias: 'Promotor - El Comunicador Optimista',
    emociones: 'Busca reconocimiento social y puede ser impulsivo emocionalmente.',
    meta: 'Entusiasmo y aceptación social.',
    juzgaALosDemasPor: 'Su capacidad para comunicar y motivar.',
    influyeEnLosDemasMediante: 'Carisma, optimismo y energía contagiosa.',
    suValorParaLaOrganizacion: 'Motiva, persuade, genera entusiasmo, construye relaciones.',
    abusaDe: 'Las palabras y promesas sin seguimiento.',
    bajoPresion: 'Se vuelve hablador excesivamente o evita confrontación.',
    teme: 'El rechazo social, no ser escuchado.',
    seriaEficazSi: 'Fuera más consistente, completara proyectos, siguiera procesos establecidos.',
    descripcionNarrativa: `El Influyente es el "alma de la fiesta" en cualquier organización. Es naturalmente optimista y ve el lado positivo de las situaciones. Su energía y entusiasmo son contagiosos y pueden motivar a otros a lograr más. Es excelente en situaciones que requieren comunicación y construcción de relaciones.

Sin embargo, el Influyente puede ser visto como superficial en su análisis y puede hacer promesas sin siempre cumplirlas. Su tendencia a buscar aceptación social puede llevarlo a decir lo que otros quieren escuchar más que decir la verdad difícil. Cuando se enfrenta a conflicto, puede preferir evitarlo en lugar de enfrentarlo directamente.

El Influyente prospera en ambientes dinámicos y sociales. Está motivado por el reconocimiento y la aceptación. Para el Influyente, el proceso es menos importante que la experiencia general vivida durante el viaje hacia el objetivo.`,
    fortalezas: [
      'Comunicación excepcional y persuasión',
      'Construcción de relaciones y redes',
      'Optimismo y energía contagiosa',
      'Capacidad para motivar a otros',
      'Flexibilidad y adaptabilidad',
      'Pensamiento creativo y generación de ideas'
    ],
    areasMejora: [
      'Seguimiento y cumplimiento de detalles',
      'Desarrollo de consistencia en ejecución',
      'Análisis profundo antes de decidir',
      'Enfrentar conflictos directamente',
      'Desarrollar profundidad técnica',
      'Manejo del compromiso y sostenibilidad'
    ],
    motivadores: [
      'Interacción social y trabajo en equipo',
      'Reconocimiento y aceptación',
      'Variedad y novedad de tareas',
      'Oportunidades para presentar/comunicar',
      'Libertad para innovar',
      'Ambiente dinámico y colaborativo'
    ],
    estilo: 'I'
  },

  'Alto S': {
    nombre: 'El Apoyo - Perfil alto en Estabilidad',
    alias: 'Cooperador - El Servidor Leal',
    emociones: 'Busca apoyo y estabilidad, puede temer el cambio.',
    meta: 'Armonía y estabilidad en las relaciones.',
    juzgaALosDemasPor: 'Su lealtad y disposición para ayudar.',
    influyeEnLosDemasMediante: 'La paciencia, la comprensión y el apoyo genuino.',
    suValorParaLaOrganizacion: 'Apoya a otros, mantiene equipo unido, es consistente y leal.',
    abusaDe: 'La paciencia y el sacrificio personal.',
    bajoPresion: 'Se vuelve pasivo o acepta culpa que no le corresponde.',
    teme: 'El cambio repentino, la confrontación, el rechazo del grupo.',
    seriaEficazSi: 'Fuera más decisivo, expresara sus opiniones, iniciara acción.',
    descripcionNarrativa: `El Apoyo es el corazón humano de cualquier equipo. Es naturalmente empático y comprende el impacto emocional de las situaciones en las personas. Valora la estabilidad y la consistencia, y trabaja duro para mantener la armonía en su ambiente.

El Apoyo es leal hasta el extremo y puede sacrificar sus propias necesidades por el bien del grupo. Sin embargo, esto puede llevar a que su propia voz sea sofocada o ignorada. Puede ser muy resistente al cambio, especialmente si siente que podría disrumpir la cohesión del grupo.

Bajo presión, el Apoyo tiende a volverse pasivo o puede asumir la culpa de situaciones para evitar confrontación. Es importante que el Apoyo aprenda a establecer límites y a expresar sus propias necesidades. Su lealtad y consistencia son invaluables, pero su falta de iniciativa puede limitar su crecimiento profesional.`,
    fortalezas: [
      'Lealtad y confiabilidad excepcionales',
      'Empatía profunda y comprensión',
      'Paciencia y compostura bajo presión',
      'Capacidad para mantener armonía en grupos',
      'Consistencia y estabilidad en desempeño',
      'Excelente apoyo y mentoría para otros'
    ],
    areasMejora: [
      'Ser más decisivo tomando iniciativa',
      'Expresar opiniones propias con confianza',
      'Aceptar el cambio como oportunidad',
      'Establecer límites saludables',
      'Desarrollar mayor autocrítica profesional',
      'Tomar riesgos calculados'
    ],
    motivadores: [
      'Trabajo en equipo colaborativo',
      'Relaciones significativas y duraderas',
      'Estabilidad y previsibilidad',
      'Oportunidades para apoyar a otros',
      'Reconocimiento de contribución leal',
      'Ambiente seguro y de confianza'
    ],
    estilo: 'S'
  },

  'DI': {
    nombre: 'El Ejecutivo - Dominancia + Influencia',
    alias: 'Vendedor Dinámico',
    emociones: 'Energético y competitivo, busca influencia y reconocimiento.',
    meta: 'Resultados con impacto visible.',
    juzgaALosDemasPor: 'Capacidad para producir y comunicar resultados.',
    influyeEnLosDemasMediante: 'Demostración de competencia combinada con persuasión.',
    suValorParaLaOrganizacion: 'Impulsa crecimiento, vende visión, lidera con carisma, logra objetivos.',
    abusaDe: 'La urgencia y la promesa sin sustancia.',
    bajoPresion: 'Se vuelve agresivo o manipulador para lograr objetivos.',
    teme: 'La pérdida de estatus o influencia.',
    seriaEficazSi: 'Desarrollara mayor profundidad en sustancia de sus propuestas.',
    descripcionNarrativa: `El Ejecutivo combina la orientación hacia resultados del Dominante con el carisma del Influyente. Es un líder natural que puede impulsar una visión mientras inspira a otros a seguirlo. Es excelente en ventas, negociaciones y presentaciones de alto impacto.

Combina la decisión rápida del D con la habilidad comunicativa del I. Suele ser carismático y puede convencer a otros de su visión. Sin embargo, puede a veces favorecer lo espectacular sobre lo sustancial, y sus promesas no siempre se cumplen si prioriza nuevas oportunidades.`,
    fortalezas: [
      'Liderazgo carismático e inspirador',
      'Combinación de acción rápida y persuasión',
      'Visión clara comunicada con energía',
      'Capacidad negociadora excepcional',
      'Motivación y movilización de equipos',
      'Adaptabilidad rápida a cambios'
    ],
    areasMejora: [
      'Profundidad técnica en detalles',
      'Seguimiento consistente de compromisos',
      'Escucha activa vs. dominar conversación',
      'Autenticidad vs. manipulación',
      'Gestión realista de expectativas'
    ],
    motivadores: [
      'Liderazgo visible y reconocido',
      'Reconocimiento público y estatus',
      'Ventas y crecimiento medible',
      'Influencia y poder de decisión',
      'Autonomía y libertad de acción'
    ],
    estilo: 'DI'
  },

  'DC': {
    nombre: 'El Perfeccionista - Dominancia + Cumplimiento',
    alias: 'Ingeniero de Control',
    emociones: 'Exigencia interna extrema, baja tolerancia a errores.',
    meta: 'Excelencia en resultados con estándares altos.',
    juzgaALosDemasPor: 'Competencia y apego a estándares.',
    influyeEnLosDemasMediante: 'Demostración de dominio técnico y exigencia de excelencia.',
    suValorParaLaOrganizacion: 'Asegura calidad, impulsa mejora continua, establece estándares altos.',
    abusaDe: 'La crítica y la demanda de perfección.',
    bajoPresion: 'Se vuelve crítico y demandante con exceso.',
    teme: 'El fracaso, la incompetencia, la desorganización.',
    seriaEficazSi: 'Fuera más flexible con imperfección humana.',
    descripcionNarrativa: `El Perfeccionista busca tanto resultados como calidad en los procesos. Es un líder técnico que entiende que la excelencia requiere atención al detalle. Sin embargo, puede ser tan exigente consigo mismo y con otros que crea un ambiente estresante.

Combina el impulso del D con los estándares rigurosos del C. Esto lo convierte en alguien que no solo busca ganar, sino ganar de la forma "correcta". Puede ser visto como controlador debido a su deseo de asegurar la calidad en cada paso.`,
    fortalezas: [
      'Orientación implacable a excelencia',
      'Conocimiento técnico profundo',
      'Control de calidad excepcional',
      'Liderazgo basado en competencia demostrada',
      'Establecimiento de altos estándares',
      'Resolución sistemática de problemas complejos'
    ],
    areasMejora: [
      'Flexibilidad con imperfección humana',
      'Desarrollo de empatía y comprensión',
      'Delegación confiada de responsabilidades',
      'Aceptación de buenos resultados',
      'Manejo del estrés personal',
      'Comunicación sin criticar'
    ],
    motivadores: [
      'Proyectos complejos que requieren expertise',
      'Oportunidades para mejorar procesos',
      'Reconocimiento técnico y profesional',
      'Control sobre resultados finales',
      'Estándares claros y medibles',
      'Autonomía profesional total'
    ],
    estilo: 'DC'
  },

  'DS': {
    nombre: 'El Estabilizador - Dominancia + Estabilidad',
    alias: 'Guardián Firme',
    emociones: 'Decidido pero confiable, baja variabilidad emocional.',
    meta: 'Resultados sostenibles con estabilidad.',
    juzgaALosDemasPor: 'Consistencia y confiabilidad en desempeño.',
    influyeEnLosDemasMediante: 'Ejemplo personal consistente y expectativas claras.',
    suValorParaLaOrganizacion: 'Lidera consistentemente, construye sistemas estables, es confiable.',
    abusaDe: 'La rigidez de control.',
    bajoPresion: 'Se vuelve obstinado pero no abandona.',
    teme: 'El cambio que disrumpe estabilidad.',
    seriaEficazSi: 'Fuera más adaptable a cambio necesario.',
    descripcionNarrativa: `El Estabilizador es un líder confiable que busca crear sistemas sostenibles. Combina la orientación a resultados del Dominante con la confiabilidad del Apoyo. Es excelente en roles administrativos y de gestión de operaciones.

Puede mantener el rumbo incluso en tiempos difíciles, lo que lo hace más resistente que el D puro. Sin embargo, puede ser resistente a cambios transformacionales cuando siente que amenazan la estabilidad establecida.`,
    fortalezas: [
      'Liderazgo consistente y predecible',
      'Construcción de sistemas sostenibles',
      'Confiabilidad y estabilidad inquebrantable',
      'Gestión experta de operaciones',
      'Visión a largo plazo estratégica',
      'Ejemplo personal fuerte y confiable'
    ],
    areasMejora: [
      'Adaptación a cambio rápido necesario',
      'Mayor flexibilidad estratégica',
      'Expresión de visión inspiradora',
      'Delegación y empoderamiento de otros',
      'Innovación vs. mantener status quo'
    ],
    motivadores: [
      'Construcción de sistemas y procesos',
      'Responsabilidad clara y definida',
      'Estabilidad laboral de largo plazo',
      'Reconocimiento de confiabilidad',
      'Oportunidades de mejora sostenible',
      'Liderazgo estructurado y ordenado'
    ],
    estilo: 'DS'
  }
};

export const getDISCProfile = (dominantStyle: string): DISCProfileDetail => {
  // Normalizar el nombre del estilo
  const normalized = dominantStyle
    .replace(/Moderado/g, '')
    .replace(/Alto\s/g, '')
    .trim();

  // Buscar coincidencia directa
  const profile = discProfiles[dominantStyle] || discProfiles[`Alto ${normalized}`];
  
  if (profile) {
    return profile;
  }

  // Fallback a C
  return discProfiles['Alto C'] as DISCProfileDetail;
};
