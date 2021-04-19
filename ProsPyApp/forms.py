from builtins import property
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, PasswordChangeForm, UserChangeForm
from django.contrib.auth.models import User
from django.forms import ModelForm
from .models import *

class UsuarioForm(UserCreationForm):
    username = forms.CharField()
    password1 = forms.CharField(label='Contraseña', widget=forms.PasswordInput(attrs={'class': 'form-sma'}))
    password2 = forms.CharField(label='Repetir Contraseña', widget=forms.PasswordInput(attrs={'class': 'form-sma'}))
    first_name = forms.CharField(label='Nombre', max_length=140, required=True,)
    last_name = forms.CharField(label='Apellido', max_length=140, required=False,
                                )
    email = forms.EmailField(required=True, widget=forms.TextInput(attrs={'class': 'form-sma'}))

    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'first_name',
            'last_name',
            'password1',
            'password2',
        )


class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'controls', 'placeholder': 'Usuario'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'controls', 'placeholder': 'Contraseña'}))

    class Meta:
        model = User
        fields = (
            'username',
            'password',
        )


class ContraseñaForm(PasswordChangeForm):
    old_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-sma'}))
    new_password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-sma'}))
    new_password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-sma'}))


class UsuForm(ModelForm):
    first_name = forms.CharField(max_length=140, required=True, widget=forms.TextInput(attrs={'class': 'form-sma'}))
    last_name = forms.CharField(max_length=140, required=False, widget=forms.TextInput(attrs={'class': 'form-sma'}))
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-sma'}))
    email = forms.EmailField(required=True, widget=forms.TextInput(attrs={'class': 'form-sma'}))
    is_active = forms.BooleanField(required=True)
    is_superuser = forms.BooleanField(required=False)

    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'first_name',
            'last_name',
            'is_active',
            'is_superuser'
        )

    @property
    def is_staff(self):
        return self.is_superuser


class CaBatchForm(forms.ModelForm):
    titulo = forms.CharField(label='Titulo',widget=forms.TextInput(attrs={'class': 'form-control','float':'left'}))
    descripcion = forms.CharField(widget=forms.Textarea(attrs={"rows":5, "cols":20}))
    y = forms.FloatField(label='Y',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    ks = forms.FloatField(label='Ks',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    umax = forms.FloatField(label='Umax',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    ms = forms.FloatField(label='Ms',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    f = forms.FloatField(label='F',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    t = forms.FloatField(label='T',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    v0 = forms.FloatField(label='V0',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    v = forms.FloatField(label='V',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    vf = forms.FloatField(label='Vf',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    so = forms.FloatField(label='So',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    n = forms.FloatField(label='N',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    x = forms.FloatField(label='X',widget=forms.TextInput(attrs={'class': 'form-sma'}))
    reactor = forms.ModelChoiceField(queryset = Reactor.objects.all())
    organismo = forms.ModelChoiceField(queryset = Bacteria.objects.all())
    usuario = forms.ModelChoiceField(queryset = User.objects.all())

    class Meta:
        model = CaBatch
        fields = '__all__'


