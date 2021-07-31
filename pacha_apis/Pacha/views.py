from django.shortcuts import render
from rest_framework import viewsets
from .models import Agricultor, Tierra, Finanzas, Comunidad, Cultivo
from .serializers import AgricultorSerializer, TierraSerializer, FinanzasSerializer, ComunidadSerializer, CultivoSerializer

class AgricultorViewSet(viewsets.ModelViewSet):
    serializer_class = AgricultorSerializer

    def get_queryset(self):
        queryset = Agricultor.objects.all()
        nombre = self.request.query_params.get('nombre')
        if nombre is not None:
            queryset = queryset.filter(nombre__contains=nombre)
        return queryset

class TierraViewSet(viewsets.ModelViewSet):
    serializer_class = TierraSerializer

    def get_queryset(self):
        queryset = Tierra.objects.all()
        geolocalizacion = self.request.query_params.get('geolocalizacion')
        if geolocalizacion is not None:
            queryset = queryset.filter(geolocalizacion__contains=geolocalizacion)
        return queryset

class FinanzasViewSet(viewsets.ModelViewSet):
    serializer_class = FinanzasSerializer

    def get_queryset(self):
        queryset = Finanzas.objects.all()
        prevision_produccion = self.request.query_params.get('prevision_produccion')
        if prevision_produccion is not None:
            queryset = queryset.filter(prevision_produccion__contains=prevision_produccion)
        return queryset

class ComunidadViewSet(viewsets.ModelViewSet):
    serializer_class = ComunidadSerializer

    def get_queryset(self):
        queryset = Comunidad.objects.all()
        conciencia = self.request.query_params.get('conciencia')
        if conciencia is not None:
            queryset = queryset.filter(conciencia__contains=conciencia)
        return queryset

class CultivoViewSet(viewsets.ModelViewSet):
    serializer_class = CultivoSerializer

    def get_queryset(self):
        queryset = Cultivo.objects.all()
        nombre = self.request.query_params.get('nombre')
        if nombre is not None:
            queryset = queryset.filter(nombre__contains=nombre)
        return queryset
