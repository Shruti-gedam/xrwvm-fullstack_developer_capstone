"""djangoproj URL Configuration"""

from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('djangoapp/', include('djangoapp.urls')),
    path(
        'about',
        TemplateView.as_view(template_name='About.html'),
        name='about',
    ),
    path(
        '',
        TemplateView.as_view(template_name='Home.html'),
        name='home',
    ),
]

urlpatterns += staticfiles_urlpatterns()