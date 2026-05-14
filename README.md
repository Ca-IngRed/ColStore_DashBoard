##Descripcion General

ColStore_Dashboard es una interfaz administrativa para la gestión de una tienda. Permite visualizar métricas clave como ventas totales, productos en inventario, clientes registrados y pedidos realizados. Incluye gráficos interactivos de ventas mensuales, visitantes diarios y distribución de ganancias, además de tablas con transacciones recientes y productos más vendidos.

El dashboard está diseñado para ser completamente responsivo, funcionando correctamente en dispositivos de escritorio, tablet y móvil.


##Disposicion del Dashboard

El dashboard se organiza en cuatro áreas principales:

Barra lateral (Sidebar): Contiene el logo "COLSTORE" y el menú de navegación (Estadísticas, Productos, Ventas, Clientes, Reportes, Configuración, Ayuda y Cerrar Sesión). 
En móvil se oculta detrás de un botón hamburguesa ☰.

Encabezado (Header): Muestra el título de la sección actual (Estadísticas) y dos botones de acción rápida: Correo y Notificaciones.

Área principal (Main): Es el corazón del dashboard. Aquí encontramos:

	4 tarjetas con métricas clave: Ventas ($12,500), Productos (320), Clientes (1,240) y Pedidos (89)

	3 gráficos interactivos creados con Chart.js: Ventas mensuales (línea), Visitantes por día (barras) y Ganancias (dona)

	2 tablas con datos: Transacciones Recientes (cliente, total, estado) y Productos Más Vendidos (con imágenes)

Pie de página (Footer): Muestra el copyright y año actual.


##Notas de diseño

- **CSS Grid** Se uso en la estructura principal (sidebar, header, main, footer), con áreas nombradas para mayor claridad.
 
- **Flexbox** para componentes internos (tarjetas, menús, filas de tablas), asegurando alineación y distribución responsiva.


##Diseño Responsive

El diseño es completamente responsivo: se adapta automáticamente a escritorio, tablet y móvil gracias a CSS Grid y Flexbox. En pantallas pequeñas, el sidebar se colapsa y las tarjetas se apilan verticalmente.

Detalles del diseño responsive
	**Movil (480px)**
	**Tablet (768px)**
	**Escritorio (1440)**


##Tecnologias Usadas

| Tecnología           |  Uso															    |
|-------------------------------------------------------------------------------------------|
| **HTML5**            |  Estructura semántica del documento 							    |
| **CSS3**             |  Estilos, Grid (layout principal) y Flexbox (componentes internos) |
| **JavaScript (ES6)** |  lógica del menú móvil											    |
| **Chart.js**         |  Gráficos interactivos											    |
| **Font Awesome 6**   |  Iconografía													    |


##Accesibilidad

| Aspecto 					 | Implementación 																				   |
|----------------------------|-------------------------------------------------------------------------------------------------|
| **Roles ARIA**             | Se añadió `role="navigation"` al sidebar y `role="main"` al contenido principal 				   |
| **Etiquetas alt**		     | Todas las imágenes (perfiles y productos) tienen descripciones `alt` descriptivas               |
| **aria-label**   		     | Los botones sin texto visible (menú hamburguesa, correo, notificaciones) incluyen `aria-label`  |
| **Contraste de colores**   | Verificado WCAG AA: texto oscuro (#1F2937) sobre fondo blanco (#FFFFFF)                         |
| **Navegación por teclado** | Todos los elementos interactivos son accesibles mediante la tecla Tab 						   |
| **Responsive** 			 | El sidebar se colapsa en móvil y se despliega con botón hamburguesa, manteniendo usabilidad 	   |




