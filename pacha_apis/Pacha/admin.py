from django.contrib import admin
from django.contrib.admin import register, ModelAdmin
from .models import Agricultor, Tierra, Finanzas, Comunidad, Cultivo
from .forms import AgricultorForm, TierraForm, FinanzasForm, ComunidadForm, CultivoForm

@register(Agricultor)
class AgricultorModelAdmin(ModelAdmin):
    list_display = ['id', 
                    'nombre', 
                    'dni',
                    'contacto',
                    'correo',
                    'web',
                    'contrasena', 
                    'fecha_nacimiento', 
                    'anios_experiencia', 
                    'nivel_educativo', 
                    'alfabetizacion_digital', 
                    'activos_tecnológicos', 
                    'estado_civil', 
                    'numero_hijos']
    search_fields = ['nombre']

    def get_form(self, request, obj=None, change=False, **kwargs):
        form = AgricultorForm
        form.current_user = request.user
        form.request = request
        return form

@register(Tierra)
class TierraModelAdmin(ModelAdmin):
    list_display = ['id',
					'geolocalizacion',
                    'latitud',
                    'longitud',
					'area_campo',
					'cultivo',
					'edad_cultivo',
					'tipo_suelo',
					'tipo_riego',
					'frecuencia_riego',
					'historial_medio_rendimiento']
    search_fields = ['geolocalizacion']

    def get_form(self, request, obj=None, change=False, **kwargs):
        form = TierraForm
        form.current_user = request.user
        form.request = request
        return form

@register(Finanzas)
class FinanzasModelAdmin(ModelAdmin):
    list_display = ['id',
					'prevision_produccion',
					'deuda',
					'costo_mano_obra',
					'gastos_agua_riego',
					'costo_total',
					'precio_medio_venta',
					'ingresos_otros_cultivos',
					'ingresos_no_agrícolas']
    search_fields = ['prevision_produccion']

    def get_form(self, request, obj=None, change=False, **kwargs):
        form = FinanzasForm
        form.current_user = request.user
        form.request = request
        return form

@register(Comunidad)
class ComunidadModelAdmin(ModelAdmin):
    list_display = ['id',
					'conciencia',
					'integridad',
					'habilidad_cognitiva']
    search_fields = ['conciencia']

    def get_form(self, request, obj=None, change=False, **kwargs):
        form = ComunidadForm
        form.current_user = request.user
        form.request = request
        return form

@register(Cultivo)
class CultivoModelAdmin(ModelAdmin):
    list_display = ['id',
                    'agricultor',
                    'nombre',
                    'precio',
                    'calificacion',
                    'geolocalizacion',
                    'informacion',
                    'stock']
    search_fields = ['nombre']

    def get_form(self, request, obj=None, change=False, **kwargs):
        form = CultivoForm
        form.current_user = request.user
        form.request = request
        return form
