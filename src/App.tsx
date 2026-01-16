import { 
  // Already present
  Button, 
  Input,
  SelectMultiple,
  SelectMultipleTrigger,
  SelectMultipleContent,
  SelectMultipleItem,
  SelectMultipleBadges,
  DatePicker,
  DatePickerInput,
  LoadingOverlay,
  // Layout & Structure
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Separator,
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  ScrollArea,
  ScrollBar,
  // Forms & Inputs
  Textarea,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
  Label,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldContent,
  FieldLabel,
  FieldTitle,
  FieldDescription,
  FieldSeparator,
  FieldError,
  Calendar,
  CalendarDayButton,
  // Feedback & Overlays
  Alert,
  AlertTitle,
  AlertDescription,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  Popover,
  PopoverTrigger,
  PopoverContent,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Toaster,
  Progress,
  Skeleton,
  Spinner,
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  // Navigation
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarGroup,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  // Menus
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  // Data Display
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  DropdownSorter,
  TableHeaderCell,
  CustomTable,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
  AspectRatio,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  // Interactive
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Slider,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  // Utilities
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
  Item,
  ItemGroup,
  ItemSeparator,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
  Kbd,
  KbdGroup
} from "efc-ui-library";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { MoreVertical } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  // Existing state
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [dateInput, setDateInput] = useState<Date | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  // New state for interactive components
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [hoverCardOpen, setHoverCardOpen] = useState(false);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [commandDialogOpen, setCommandDialogOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [radioValue, setRadioValue] = useState("option1");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [toggleValue, setToggleValue] = useState(false);
  const [toggleGroupValue, setToggleGroupValue] = useState("a");
  const [tabsValue, setTabsValue] = useState("tab1");
  const [accordionValue, setAccordionValue] = useState("");
  const [progressValue, setProgressValue] = useState(33);
  const [inputOTPValue, setInputOTPValue] = useState("");
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(new Date());
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const form = useForm();

  // Table filter state
  const [statusFilterIndex, setStatusFilterIndex] = useState(0);
  const [roleFilterIndex, setRoleFilterIndex] = useState(0);
  const [creditCardFilterIndex, setCreditCardFilterIndex] = useState(0);

  // Filter options
  const statusFilters = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Pending", value: "pending" },
  ];

  const roleFilters = [
    { label: "All", value: "all" },
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ];

  // Credit Card filters for nested menu (placeholder - actual selection handled in nested menu)
  const creditCardFilters = [
    { label: "All", value: "all" },
  ];

  // Nested menu structure for Credit Card column
  const creditCardMenuCategories = [
    {
      label: "Profile",
      items: [
        { label: "Reference", value: "profile.reference" },
        { label: "Gender", value: "profile.gender" },
        { label: "Date Of Birth", value: "profile.dob" },
        { label: "Age", value: "profile.age" },
        { label: "Birthday", value: "profile.birthday" },
        { label: "Groups", value: "profile.groups" },
        { label: "Key Person", value: "profile.keyPerson" },
        { label: "Campaign", value: "profile.campaign" },
        { label: "Referrer", value: "profile.referrer" },
        { label: "Notes", value: "profile.notes" },
        { label: "Diet", value: "profile.diet" },
        { label: "Allergies", value: "profile.allergies" },
        { label: "Medical", value: "profile.medical" },
        { label: "Forms Requested", value: "profile.formsRequested" },
        { label: "Forms Completed", value: "profile.formsCompleted" },
        { label: "Allow Photography", value: "profile.allowPhotography" },
      ],
    },
    {
      label: "Custom Properties",
      items: [
        { label: "Property 1", value: "custom.property1" },
        { label: "Property 2", value: "custom.property2" },
      ],
    },
    {
      label: "Contact",
      items: [
        { label: "Email", value: "contact.email" },
        { label: "Phone", value: "contact.phone" },
        { label: "Address", value: "contact.address" },
      ],
    },
    {
      label: "Enrolment",
      items: [
        { label: "Status", value: "enrolment.status" },
        { label: "Date", value: "enrolment.date" },
        { label: "Program", value: "enrolment.program" },
      ],
    },
    {
      label: "Subscription",
      items: [
        { label: "Plan", value: "subscription.plan" },
        { label: "Status", value: "subscription.status" },
        { label: "Renewal Date", value: "subscription.renewalDate" },
      ],
    },
    {
      label: "Assessment",
      items: [
        { label: "Score", value: "assessment.score" },
        { label: "Date", value: "assessment.date" },
        { label: "Type", value: "assessment.type" },
      ],
    },
    {
      label: "Portal Access",
      items: [
        { label: "Username", value: "portal.username" },
        { label: "Last Login", value: "portal.lastLogin" },
        { label: "Access Level", value: "portal.accessLevel" },
      ],
    },
  ];

  // Filter handlers
  const handleStatusFilter = (filter: { label: string; value: string }) => {
    const index = statusFilters.findIndex((f) => f.value === filter.value);
    setStatusFilterIndex(index >= 0 ? index : 0);
    console.log("Status filter changed:", filter);
  };

  const handleRoleFilter = (filter: { label: string; value: string }) => {
    const index = roleFilters.findIndex((f) => f.value === filter.value);
    setRoleFilterIndex(index >= 0 ? index : 0);
    console.log("Role filter changed:", filter);
  };

  const handleCreditCardFilter = (filter: { label: string; value: string }) => {
    setCreditCardFilterIndex(0);
    console.log("Credit Card filter changed:", filter);
  };

  // Table row selection state
  const [isSelectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<boolean[]>([false, false]);

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setSelectedRows([checked, checked]);
  };

  const handleRowSelect = (rowIndex: number, checked: boolean) => {
    setSelectedRows((prev) => {
      const updated = [...prev];
      updated[rowIndex] = checked;
      // Update select all based on all rows being selected
      const allSelected = updated.every((val) => val === true);
      setSelectAll(allSelected);
      return updated;
    });
  };

  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape"
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="min-h-screen bg-background flex">
          <Toaster />
          <Sidebar collapsible="icon" className="border-r">
            <SidebarHeader>
              <h3 className="text-lg font-semibold">EFC UI Library</h3>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Components</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>All Components</SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <Button variant="outline" size="sm" className="w-full">
                Close
              </Button>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset className="flex-1 overflow-auto">
            <div className="p-8 space-y-12 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold">EFC UI Library - All Components</h1>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <SidebarTrigger className="lg:hidden" />
              </div>
            </div>

            {/* Existing Components */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Existing Components</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">SelectMultiple Component</h3>
                <SelectMultiple
                  value={selectedItems}
                  onValueChange={setSelectedItems}
                  placeholder="Select fruits..."
                >
                  <SelectMultipleTrigger maxDisplay={2} />
                  <SelectMultipleContent>
                    {items.map((item) => (
                      <SelectMultipleItem key={item} value={item}>
                        {item}
                      </SelectMultipleItem>
                    ))}
                  </SelectMultipleContent>
                  <SelectMultipleBadges onRemove={(value: string) => console.log("Removed:", value)} />
                </SelectMultiple>
                <p className="text-sm text-muted-foreground">
                  Selected: {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">DatePicker Components</h3>
                <div className="space-y-2">
                  <Label>DatePicker (Button)</Label>
                  <DatePicker
                    value={date}
                    onValueChange={setDate}
                    placeholder="Select a date"
                  />
                </div>
                <div className="space-y-2">
                  <Label>DatePickerInput</Label>
                  <DatePickerInput
                    value={dateInput}
                    onValueChange={setDateInput}
                    placeholder="Pick a date or type it"
                    format="PPP"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">LoadingOverlay Component</h3>
                <div className="space-y-2">
                  <Button onClick={() => setIsLoading(!isLoading)}>
                    {isLoading ? "Stop Loading" : "Start Loading"}
                  </Button>
                  <LoadingOverlay
                    isLoading={isLoading}
                    loadingText="Processing..."
                    spinnerSize="md"
                    backdrop={true}
                    className="min-h-[200px] border rounded-lg p-4"
                  >
                    <div className="space-y-2">
                      <p>This content is behind the loading overlay.</p>
                      <Input placeholder="Some input field" />
                      <Button variant="outline">Some button</Button>
                    </div>
                  </LoadingOverlay>
                </div>
              </div>
            </section>

            <Separator />

            {/* Layout & Structure */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Layout & Structure</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Accordion</h3>
                <Accordion type="single" collapsible value={accordionValue} onValueChange={setAccordionValue} className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that match the other components.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Card</h3>
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content goes here.</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Separator</h3>
                <div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                    <p className="text-sm text-muted-foreground">
                      An open-source UI component library.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Blog</div>
                    <Separator orientation="vertical" />
                    <div>Docs</div>
                    <Separator orientation="vertical" />
                    <div>Source</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Sheet</h3>
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                  <SheetTrigger asChild>
                    <Button>Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                      </div>
                    </div>
                    <SheetFooter>
                      <Button type="submit">Save changes</Button>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Resizable Panels</h3>
                <ResizablePanelGroup className="max-w-md rounded-lg border" style={{ display: 'flex', flexDirection: 'row' }}>
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-[200px] items-center justify-center p-6">
                      <span className="font-semibold">One</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-[200px] items-center justify-center p-6">
                      <span className="font-semibold">Two</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Scroll Area</h3>
                <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                  <div className="space-y-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="text-sm">
                        Item {i + 1}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </section>

            <Separator />

            {/* Forms & Inputs */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Forms & Inputs</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Textarea</h3>
                <Textarea placeholder="Type your message here." />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Checkbox</h3>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={checkboxChecked} onCheckedChange={(checked) => setCheckboxChecked(checked === true)} />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Radio Group</h3>
                <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="option1" />
                    <Label htmlFor="option1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="option2" />
                    <Label htmlFor="option2">Option 2</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Switch</h3>
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" checked={switchChecked} onCheckedChange={setSwitchChecked} />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Select</h3>
                <Select value={selectValue} onValueChange={setSelectValue}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Input OTP</h3>
                <InputOTP
                  maxLength={6}
                  value={inputOTPValue}
                  onChange={setInputOTPValue}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Input Group</h3>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <InputGroupText>@</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput placeholder="username" />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton variant="outline">Submit</InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Label</h3>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Form</h3>
                <Form {...form}>
                  <form className="space-y-4" onSubmit={form.handleSubmit((data) => console.log(data))}>
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Field</h3>
                <FieldSet>
                  <FieldLegend>Personal Information</FieldLegend>
                  <FieldGroup>
                    <Field>
                      <FieldLabel>First Name</FieldLabel>
                      <FieldContent>
                        <Input placeholder="John" />
                      </FieldContent>
                    </Field>
                    <Field>
                      <FieldLabel>Last Name</FieldLabel>
                      <FieldContent>
                        <Input placeholder="Doe" />
                      </FieldContent>
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Calendar</h3>
                <Calendar
                  mode="single"
                  selected={calendarDate}
                  onSelect={setCalendarDate}
                  className="rounded-md border"
                />
              </div>
            </section>

            <Separator />

            {/* Feedback & Overlays */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Feedback & Overlays</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Alert</h3>
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Alert Dialog</h3>
                <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Dialog</h3>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                      <Button onClick={() => setDialogOpen(false)}>Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Drawer</h3>
                <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                  <DrawerTrigger asChild>
                    <Button>Open Drawer</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                      <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                      <p>Drawer content goes here.</p>
                    </div>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Popover</h3>
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button>Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Tooltip</h3>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Hover Card</h3>
                <HoverCard open={hoverCardOpen} onOpenChange={setHoverCardOpen}>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@nextjs</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by @vercel.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Progress</h3>
                <Progress value={progressValue} className="w-[60%]" />
                <div className="flex gap-2">
                  <Button onClick={() => setProgressValue(Math.max(0, progressValue - 10))}>-</Button>
                  <Button onClick={() => setProgressValue(Math.min(100, progressValue + 10))}>+</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Skeleton</h3>
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Spinner</h3>
                <Spinner className="h-8 w-8" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Empty</h3>
                <Empty>
                  <EmptyHeader>
                    <EmptyMedia>
                      <div className="h-12 w-12 rounded-full bg-muted" />
                    </EmptyMedia>
                    <EmptyTitle>No items found</EmptyTitle>
                    <EmptyDescription>
                      Get started by creating a new item.
                    </EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <Button>Create Item</Button>
                  </EmptyContent>
                </Empty>
              </div>
            </section>

            <Separator />

            {/* Navigation */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Navigation</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Breadcrumb</h3>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Navigation Menu</h3>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-6 w-[400px]">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Introduction</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Re-usable components built using Radix UI and Tailwind CSS.
                            </p>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Menubar</h3>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>New Tab</MenubarItem>
                      <MenubarItem>New Window</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Share</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Undo</MenubarItem>
                      <MenubarItem>Redo</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Pagination</h3>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Tabs</h3>
                <Tabs value={tabsValue} onValueChange={setTabsValue} className="w-[400px]">
                  <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">Content for Tab 1</TabsContent>
                  <TabsContent value="tab2">Content for Tab 2</TabsContent>
                  <TabsContent value="tab3">Content for Tab 3</TabsContent>
                </Tabs>
              </div>
            </section>

            <Separator />

            {/* Menus */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Menus</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Dropdown Menu</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Context Menu</h3>
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                    Right click here
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem>Back</ContextMenuItem>
                    <ContextMenuItem>Forward</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Reload</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </div>
            </section>

            <Separator />

            {/* Data Display */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Data Display</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Table</h3>
                {(() => {
                  // Table data
                  const tableData = [
                    { name: "John Doe", status: "Active", role: "Admin", creditCard: "****1234" },
                    { name: "Jane Smith", status: "Active", role: "User", creditCard: "****5678" }
                  ];

                  // Column definitions
                  const columns = [
                    {
                      key: "name",
                      label: "Name",
                      type: "simple" as const,
                    },
                    {
                      key: "status",
                      label: "Status",
                      type: "dropdown" as const,
                      filters: statusFilters,
                      currentFilterIndex: statusFilterIndex,
                      onFilterChange: handleStatusFilter,
                      onFilterSort: (filterValue: string) => {
                        console.log("Filter sort triggered:", filterValue);
                      },
                    },
                    {
                      key: "role",
                      label: "Role",
                      type: "dropdown" as const,
                      filters: roleFilters,
                      currentFilterIndex: roleFilterIndex,
                      onFilterChange: handleRoleFilter,
                      onFilterSort: (filterValue: string) => {
                        console.log("Filter sort triggered:", filterValue);
                      },
                    },
                    {
                      key: "creditCard",
                      label: "Credit Card",
                      type: "dropdown" as const,
                      filters: creditCardFilters,
                      currentFilterIndex: creditCardFilterIndex,
                      onFilterChange: handleCreditCardFilter,
                      onFilterSort: (filterValue: string) => {
                        console.log("Filter sort triggered:", filterValue);
                      },
                      dropdownChildren: (
                        <>
                          {creditCardMenuCategories.map((category) => (
                            <DropdownMenuSub key={category.label}>
                              <DropdownMenuSubTrigger>{category.label}</DropdownMenuSubTrigger>
                              <DropdownMenuSubContent>
                                {category.items.map((item) => (
                                  <DropdownMenuItem
                                    key={item.value}
                                    onClick={() => handleCreditCardFilter(item)}
                                  >
                                    {item.label}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          ))}
                        </>
                      ),
                    },
                  ];

                  return (
                    <CustomTable
                      columns={columns}
                      data={tableData}
                      selectedRows={selectedRows}
                      onRowSelect={handleRowSelect}
                      isSelectAll={isSelectAll}
                      onSelectAll={handleSelectAll}
                      bulkActions={
                        <>
                          <DropdownMenuItem>Compose Email</DropdownMenuItem>
                          <DropdownMenuItem>Compose SMS</DropdownMenuItem>
                        </>
                      }
                      rowActions={(_row: any, _index: number) => (
                        <>
                          <DropdownMenuItem>Edit Record</DropdownMenuItem>
                          <DropdownMenuItem>Export Record</DropdownMenuItem>
                        </>
                      )}
                      caption="A list of users."
                      showSelection={true}
                      showActions={false}
                    />
                  );
                })()}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Badge</h3>
                <div className="flex gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Avatar</h3>
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Aspect Ratio</h3>
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <div className="flex items-center justify-center h-full">
                    <span>16:9</span>
                  </div>
                </AspectRatio>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Carousel</h3>
                <Carousel setApi={setCarouselApi} className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Chart</h3>
                <ChartContainer config={chartConfig} className="h-[200px] w-full">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-muted-foreground">Chart visualization would appear here</p>
                  </div>
                </ChartContainer>
              </div>
            </section>

            <Separator />

            {/* Interactive */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Interactive</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Toggle</h3>
                <div className="flex gap-2">
                  <Toggle pressed={toggleValue} onPressedChange={setToggleValue}>
                    Toggle
                  </Toggle>
                  <Toggle variant="outline">Outline</Toggle>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Toggle Group</h3>
                <ToggleGroup type="single" value={toggleGroupValue} onValueChange={setToggleGroupValue}>
                  <ToggleGroupItem value="a">A</ToggleGroupItem>
                  <ToggleGroupItem value="b">B</ToggleGroupItem>
                  <ToggleGroupItem value="c">C</ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Slider</h3>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="w-[60%]"
                />
                <p>Value: {sliderValue[0]}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Collapsible</h3>
                <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
                  <div className="flex items-center justify-between space-x-4">
                    <h4 className="text-sm font-semibold">
                      @peduarte starred 3 repositories
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        {collapsibleOpen ? "Hide" : "Show"}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-2 text-sm">
                      @radix-ui/primitives
                    </div>
                    <div className="rounded-md border px-4 py-2 text-sm">
                      @radix-ui/colors
                    </div>
                    <div className="rounded-md border px-4 py-2 text-sm">
                      @stitches/react
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Command</h3>
                <Command className="rounded-lg border shadow-md max-w-md">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>Calendar</CommandItem>
                      <CommandItem>Search Emoji</CommandItem>
                      <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem>Profile</CommandItem>
                      <CommandItem>Billing</CommandItem>
                      <CommandItem>Settings</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
                <CommandDialog open={commandDialogOpen} onOpenChange={setCommandDialogOpen}>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>Calendar</CommandItem>
                      <CommandItem>Search Emoji</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </CommandDialog>
                <Button onClick={() => setCommandDialogOpen(true)}>Open Command Dialog</Button>
              </div>
            </section>

            <Separator />

            {/* Utilities */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Utilities</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Button Group</h3>
                <ButtonGroup>
                  <Button>One</Button>
                  <ButtonGroupSeparator />
                  <Button>Two</Button>
                  <ButtonGroupSeparator />
                  <Button>Three</Button>
                </ButtonGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Item</h3>
                <ItemGroup>
                  <Item>
                    <ItemMedia variant="icon">
                      <div className="h-10 w-10 rounded-full bg-primary" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>Item Title</ItemTitle>
                      <ItemDescription>Item description goes here</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Button size="sm">Action</Button>
                    </ItemActions>
                  </Item>
                  <ItemSeparator />
                  <Item>
                    <ItemMedia variant="icon">
                      <div className="h-10 w-10 rounded-full bg-secondary" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>Another Item</ItemTitle>
                      <ItemDescription>Another description</ItemDescription>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Kbd</h3>
                <div className="flex gap-2">
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </div>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>Shift</Kbd>
                  <Kbd>K</Kbd>
                </KbdGroup>
              </div>
            </section>

            <Separator />

            {/* Sidebar Example */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Sidebar</h2>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The Sidebar is already visible on the left side of the page. Use the toggle button in the header or the collapse icon to interact with it.
                </p>
                <div className="flex items-center gap-2">
                  <SidebarTrigger />
                  <span className="text-sm">Click to toggle sidebar</span>
                </div>
                <div className="p-4 border rounded-lg bg-muted/50">
                  <p className="text-sm">
                    <strong>Sidebar Components:</strong> The sidebar on the left demonstrates SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, and SidebarMenuButton components.
                  </p>
                </div>
              </div>
            </section>

            {/* Toast Example */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Toast</h2>
              <div className="space-y-4">
                <Button onClick={() => toast("Event has been created")}>
                  Show Toast
                </Button>
                <Button onClick={() => toast.success("Success!")}>
                  Success Toast
                </Button>
                <Button onClick={() => toast.error("Error occurred")}>
                  Error Toast
                </Button>
              </div>
            </section>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
