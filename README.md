feature/ST-50/Add-a-service:
  -Refactored data access to the HeroService class.
  -Registered the HeroService as the provider of its service at the root level so that it can be injected anywhere in the application.
  -Used Angular Dependency Injection to inject it into a component.
  -Gave the HeroService get data method an asynchronous signature.
  -Discovered Observable and the RxJS Observable library.
  -Used RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
  -The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
  -Created a MessageService for loosely-couped communication between classes.
  -The HeroService injected into  component is created with another injected service, MessageService.
