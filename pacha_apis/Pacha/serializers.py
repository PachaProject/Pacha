from rest_framework import serializers
from .models import Agricultor, Tierra, Finanzas, Comunidad, Cultivo

class AgricultorSerializer(serializers.ModelSerializer):
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

class TierraSerializer(serializers.ModelSerializer):
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

class FinanzasSerializer(serializers.ModelSerializer):
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

class ComunidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comunidad
        fields = ('id',
                  'conciencia',
                  'integridad',
                  'habilidad_cognitiva')

class AgricultorNombreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agricultor
        fields = ('nombre',
                  'contacto',
                  'web')

class TierraGeolocalizacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tierra
        fields = ('latitud', 'longitud')

class CultivoSerializer(serializers.ModelSerializer):
    agricultor = AgricultorNombreSerializer(read_only=True)
    geolocalizacion = TierraGeolocalizacionSerializer(read_only=True)
    
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
