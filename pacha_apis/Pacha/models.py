from django.db import models
from model_utils.models import TimeStampedModel

class Agricultor(TimeStampedModel):
    nombre = models.CharField(max_length=15)
    dni = models.CharField(max_length=8)
    contacto = models.CharField(max_length=11)
    correo = models.EmailField()
    web = models.CharField(max_length=200)
    contrasena = models.CharField(max_length=15)
    fecha_nacimiento = models.DateField(blank=True, null=True)
    anios_experiencia = models.IntegerField(blank=True, null=True)
    nivel_educativo = models.CharField(max_length=30, blank=True, null=True)
    alfabetizacion_digital = models.CharField(max_length=30, blank=True, null=True)
    activos_tecnológicos = models.IntegerField(blank=True, null=True)
    estado_civil = models.CharField(max_length=30, blank=True, null=True)
    numero_hijos = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'AGRICULTOR'
        verbose_name = 'Agricultor'
        verbose_name_plural = 'Agricultores'

    def __str__(self):
        return self.nombre

class Tierra(TimeStampedModel):
    geolocalizacion = models.CharField(max_length=100)
    latitud = models.CharField(max_length=50)
    longitud = models.CharField(max_length=50)
    area_campo = models.IntegerField()
    cultivo = models.CharField(max_length=200, blank=True, null=True)
    edad_cultivo = models.IntegerField(blank=True, null=True)
    tipo_suelo = models.CharField(max_length=200, blank=True, null=True)
    tipo_riego = models.CharField(max_length=200, blank=True, null=True)
    frecuencia_riego = models.CharField(max_length=200, blank=True, null=True)
    historial_medio_rendimiento = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        db_table = 'TIERRA'
        verbose_name = 'Tierra'
        verbose_name_plural = 'Tierras'

    def __str__(self):
        return ('[' + self.latitud + ', ' + self.longitud + ']')

class Finanzas(TimeStampedModel):
    prevision_produccion = models.CharField(max_length=200)
    deuda = models.FloatField()
    costo_mano_obra = models.FloatField()
    gastos_agua_riego = models.FloatField()
    costo_total = models.FloatField()
    precio_medio_venta = models.FloatField()
    ingresos_otros_cultivos = models.FloatField(blank=True, null=True)
    ingresos_no_agrícolas = models.FloatField(blank=True, null=True)

    class Meta:
        db_table = 'FINANZAS'
        verbose_name = 'Finanzas'
        verbose_name_plural = 'Finanzas'

    def __str__(self):
        return self.prevision_produccion

class Comunidad(TimeStampedModel):
    conciencia = models.CharField(max_length=200, blank=True, null=True)
    integridad = models.CharField(max_length=200, blank=True, null=True)
    habilidad_cognitiva = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        db_table = 'COMUNIDAD'
        verbose_name = 'Comunidad'
        verbose_name_plural = 'Comunidades'

    def __str__(self):
        return self.conciencia

class Cultivo(TimeStampedModel):
    agricultor = models.ForeignKey('Agricultor', verbose_name='Agricultor', db_column='agricultor', 
                                    on_delete=models.PROTECT, related_name='agricultor')
    nombre = models.CharField(max_length=200)
    precio = models.FloatField()
    calificacion = models.FloatField(blank=True, null=True)
    geolocalizacion = models.ForeignKey('Tierra', verbose_name='Tierra', db_column='tierra', 
                                    on_delete=models.PROTECT, related_name='tierra')
    informacion = models.CharField(max_length=200, blank=True, null=True)
    stock = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'CULTIVO'
        verbose_name = 'Cultivo'
        verbose_name_plural = 'Cultivos'

    def __str__(self):
        return self.nombre
