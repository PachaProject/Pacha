from django.urls import path, include
from Pacha.views import AgricultorViewSet, TierraViewSet, FinanzasViewSet, ComunidadViewSet, CultivoViewSet
from rest_framework import routers

app_name = 'Pacha'

router = routers.SimpleRouter()
router.register(r'Agricultor', AgricultorViewSet, basename='Agricultor')
router.register(r'Tierra', TierraViewSet, basename='Tierra')
router.register(r'Finanzas', FinanzasViewSet, basename='Finanzas')
router.register(r'Comunidad', ComunidadViewSet, basename='Comunidad')
router.register(r'Cultivo', CultivoViewSet, basename='Cultivo')

urlpatterns = [
    path('', include((router.urls, 'HambreCero'), namespace='HambreCero')),
]
