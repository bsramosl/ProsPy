from django.urls import path
from ProsPyApp import views
from django.contrib.auth.decorators import login_required

app_name = 'ProsPy'

urlpatterns = [

    path('Inicio/', login_required(views.Inicio.as_view()), name='Inicio'),
    path('Login/', views.Login.as_view(), name='Login'),
    path('Salir/', login_required(views.LogoutUsuario.as_view()), name='Salir'),

    path('ModeloReact/', login_required(views.ModeloReact.as_view()), name='ModeloReact'),
    path('TiempoCultivo/', login_required(views.TiempoCultivo.as_view()), name='TiempoCultivo'),

    path('Admin/', login_required(views.Admin.as_view()), name='Admin'),

    path('LUsuarioLista/', login_required(views.LUsuarioLista.as_view()), name='LUsuarioLista'),
    path('UsuarioLista/', login_required(views.UsuarioLista.as_view()), name='UsuarioLista'),

    path('LUTipoReactor/', login_required(views.LUTipoReactor.as_view()), name='LUTipoReactor'),
    path('TipoReactor/', login_required(views.TipoReactor.as_view()), name='TipoReactor'),
    path('EditarTipoReactor/<int:pk>/', login_required(views.EditarTipoReactor.as_view()), name='EditarTipoReactor'),
    path('EliminarUsuario/<int:pk>/', login_required(views.EliminarUsuario.as_view()), name='EliminarUsuario'),

    path('LUOrganismo/', login_required(views.LUOrganismo.as_view()), name='LUOrganismo'),
    path('Organismo/', login_required(views.Organismo.as_view()), name='Organismo'),

    path('LUReactor/', login_required(views.LUReactor.as_view()), name='LUReactor'),
    path('Reactor/', login_required(views.Reactor.as_view()), name='Reactor'),

    path('LUCaBatch/', login_required(views.LUCaBatch.as_view()), name='LUCaBatch'),
    path('CaBatch/', login_required(views.CaBatch.as_view()), name='CaBatch'),

    path('GuardarReactor/', login_required(views.GuardarReactor.as_view()), name='GuardarReactor'),


    path('CrearUsuario/', views.CrearUsuario.as_view(), name=' CrearUsuario'),
    path('CambiarContraseña', login_required(views.CambiarContraseña), name='CambiarContraseña'),
    path('EditarUsuario/<int:pk>/', login_required(views.EditarUsuario.as_view()), name='EditarUsuario'),
    path('EliminarUsuario/<int:pk>/', login_required(views.EliminarUsuario.as_view()), name='EliminarUsuario'),

]