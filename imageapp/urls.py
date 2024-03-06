from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index, name="index"),
    path("diffuse-image/", views.diffuseImg, name="diffuseImage"),
    path("language-Converter/", views.languageConverter, name="languageConverter"),
    
    path("Translate/", views.Translate, name="Translate"),
    


    path("accounts/login/", views.loginPage, name="loginPage"),
    path("signin_user/", views.accountslogin, name="acccountslogin"),
    path("accounts/logout/", views.logout, name="logout"),
    path("signup_user/", views.createAccount, name="signup"),  
    path("diffuse-image/submitRecord/", views.submitRecord, name="submitRecord"),
    path("download/", views.download, name="download"),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
