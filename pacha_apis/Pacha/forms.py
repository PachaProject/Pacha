from django import forms
from .models import Agricultor, Tierra, Finanzas, Comunidad, Cultivo

class AgricultorForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(AgricultorForm, self).__init__(*args, **kwargs)
        instance = kwargs.get('instance')

    def save(self, commit=True):
        instance = super(AgricultorForm, self).save(commit=False)
        return instance

    class Meta:
        model = Agricultor
        fields = ('id',
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
                  'numero_hijos')

class TierraForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(TierraForm, self).__init__(*args, **kwargs)
        instance = kwargs.get('instance')

    def save(self, commit=True):
        instance = super(TierraForm, self).save(commit=False)
        return instance

    class Meta:
        model = Tierra
        fields = ('id',
                  'geolocalizacion',
                  'latitud',
                  'longitud',
                  'area_campo',
                  'cultivo',
                  'edad_cultivo',
                  'tipo_suelo',
                  'tipo_riego',
                  'frecuencia_riego',
                  'historial_medio_rendimiento')

class FinanzasForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(FinanzasForm, self).__init__(*args, **kwargs)
        instance = kwargs.get('instance')

    def save(self, commit=True):
        instance = super(FinanzasForm, self).save(commit=False)
        return instance

    class Meta:
        model = Finanzas
        fields = ('id',
                  'prevision_produccion',
                  'deuda',
                  'costo_mano_obra',
                  'gastos_agua_riego',
                  'costo_total',
                  'precio_medio_venta',
                  'ingresos_otros_cultivos',
                  'ingresos_no_agrícolas')

class ComunidadForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(ComunidadForm, self).__init__(*args, **kwargs)
        instance = kwargs.get('instance')

    def save(self, commit=True):
        instance = super(ComunidadForm, self).save(commit=False)
        return instance

    class Meta:
        model = Comunidad
        fields = ('id',
                  'conciencia',
                  'integridad',
                  'habilidad_cognitiva')

class CultivoForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(CultivoForm, self).__init__(*args, **kwargs)
        instance = kwargs.get('instance')

    def save(self, commit=True):
        instance = super(CultivoForm, self).save(commit=False)
        return instance

    class Meta:
        model = Cultivo
        fields = ('id',
                  'agricultor',
                  'nombre',
                  'precio',
                  'calificacion',
                  'geolocalizacion',
                  'informacion',
                  'stock')
