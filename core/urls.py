from django.conf import settings
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('apps.landing.urls')),
    path('accounts/', include('apps.accounts.urls')),
    path('admin/', admin.site.urls)
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns