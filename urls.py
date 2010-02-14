from django.conf.urls.defaults import *

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
                       
                      (r'^update/$', 'app.views.update'),
                       (r'^$', 'app.views.index'),
 #                      (r'/update/$', 'twittericsson.app.views.update'),


    # Example:
    # (r'^twittericsson/', include('twittericsson.foo.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # (r'^admin/', include(admin.site.urls)),
)
