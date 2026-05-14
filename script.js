// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
 
    
    // Gráfica 1: Ventas
    const ctx = document.getElementById('salesChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [{
                    label: 'Ventas ($)',
                    data: [1200, 1900, 1500, 2200, 2800, 3200],
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#3B82F6',
                    pointBorderColor: '#FFFFFF',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#1F2937',
                            font: {
                                size: 12,
                                weight: 'bold'
                            }
                        },
                        position: 'top'
                    },
                    tooltip: {
                        backgroundColor: '#0F172B',
                        titleColor: '#FFFFFF',
                        bodyColor: '#94A3B8',
                        borderColor: '#3B82F6',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#6B7280'
                        },
                        grid: {
                            color: '#E5E7EB'
                        },
                        title: {
                            display: true,
                            text: 'Meses',
                            color: '#6B7280'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#6B7280'
                        },
                        grid: {
                            color: '#E5E7EB'
                        },
                        title: {
                            display: true,
                            text: 'Monto ($)',
                            color: '#6B7280'
                        }
                    }
                }
            }
        });
    }

    // Gráfica 2: Visitantes
    const visitorsCtx = document.getElementById('visitorsChart');
    if (visitorsCtx) {
        new Chart(visitorsCtx, {
            type: 'bar',
            data: {
                labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
                datasets: [{
                    label: 'Visitantes',
                    data: [120, 190, 300, 250, 400, 350, 500],
                    backgroundColor: '#3B82F6',
                    borderRadius: 8,
                    borderSkipped: false,
                    hoverBackgroundColor: '#2563EB'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#1F2937',
                            font: {
                                size: 12,
                                weight: 'bold'
                            }
                        },
                        position: 'top'
                    },
                    tooltip: {
                        backgroundColor: '#0F172B',
                        titleColor: '#FFFFFF',
                        bodyColor: '#94A3B8',
                        borderColor: '#3B82F6',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#6B7280'
                        },
                        grid: {
                            color: '#E5E7EB'
                        },
                        title: {
                            display: true,
                            text: 'Días de la semana',
                            color: '#6B7280'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#6B7280'
                        },
                        grid: {
                            color: '#E5E7EB'
                        },
                        title: {
                            display: true,
                            text: 'Número de visitantes',
                            color: '#6B7280'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Gráfica 3: Ganancias
    const profitsCtx = document.getElementById('profitsChart');
    if (profitsCtx) {
        new Chart(profitsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Ventas (55%)', 'Inversiones (25%)', 'Gastos (20%)'],
                datasets: [{
                    data: [55, 25, 20],
                    backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
                    borderWidth: 0,
                    hoverOffset: 10,
                    cutout: '65%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                radius: '80%',
                plugins: {
                    legend: {
                        labels: {
                            color: '#1F2937',
                            font: {
                                size: 11
                            }
                        },
                        position: 'bottom'
                    },
                    tooltip: {
                        backgroundColor: '#0F172B',
                        titleColor: '#FFFFFF',
                        bodyColor: '#94A3B8',
                        borderColor: '#3B82F6',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    //MENÚ MÓVIL
    
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    // Crear overlay (crea un fondo oscuro)
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Función para cerrar menú
    function closeMenu() {
        if (sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Función para abrir menú
    function openMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Toggle del menú
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sidebar.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    
    // Cerrar menú al hacer clic en overlay
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Cerrar menú al hacer clic en un enlace del sidebar (en móvil)
    const menuLinks = document.querySelectorAll('.sidebar a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
    
    // Cerrar menú al redimensionar a escritorio
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && sidebar && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });
   
});