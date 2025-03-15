import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TemplateShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="templates">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Templates</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Resume Templates</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose from a variety of professionally designed templates to make your resume stand out.
            </p>
          </div>
        </div>
        <div className="mx-auto py-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="creative">Creative</TabsTrigger>
                <TabsTrigger value="modern">Modern</TabsTrigger>
                <TabsTrigger value="simple">Simple</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/4] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                        <div className="absolute inset-0 bg-white/80 dark:bg-black/80">
                          <div className="p-6">
                            <div className="h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-800 mb-3"></div>
                            <div className="space-y-1.5">
                              <div className="h-3 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                              <div className="h-3 w-3/4 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                            </div>
                            <div className="mt-4">
                              <div className="h-3.5 w-24 rounded-md bg-gray-200 dark:bg-gray-800 mb-2"></div>
                              <div className="space-y-1">
                                <div className="h-2.5 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                                <div className="h-2.5 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                                <div className="h-2.5 w-2/3 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <div className="h-3.5 w-24 rounded-md bg-gray-200 dark:bg-gray-800 mb-2"></div>
                              <div className="space-y-1">
                                <div className="h-2.5 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                                <div className="h-2.5 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                                <div className="h-2.5 w-3/4 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-background">
                        <h3 className="font-medium">Template {i}</h3>
                        <p className="text-sm text-muted-foreground">Professional & clean design</p>
                        <Button variant="outline" className="w-full mt-3">
                          Use Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Other tab contents would be similar but with filtered templates */}
            <TabsContent value="professional" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {/* Professional templates */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

