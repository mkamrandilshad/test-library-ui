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
  KbdGroup,
  // Rich Text Editor
  RichTextEditor,
  // New Components
  StatCard,
  StatDisplay,
  FeedPost,
  Comment,
  Attachment,
  Timeline,
  ProfileCard
} from "efc-ui-library";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { MoreVertical, TrendingUp, Users, DollarSign, Bell, Flag } from "lucide-react";
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

  // RichTextEditor state
  const [richTextContent, setRichTextContent] = useState<string>("<p>Initial content</p>");
  const [richTextContent2, setRichTextContent2] = useState<string>("<p>Second editor content</p>");
  
  // FeedPost state
  const [feedPostLikes, setFeedPostLikes] = useState<{ [key: number]: boolean }>({});
  const [feedPostLikeCounts, setFeedPostLikeCounts] = useState<{ [key: number]: number }>({});
  const [feedPostComments, setFeedPostComments] = useState<{ [key: number]: string[] }>({});
  
  // FeedPost handlers
  const handleFeedPostLike = (postId: number) => {
    setFeedPostLikes(prev => ({ ...prev, [postId]: !prev[postId] }));
    setFeedPostLikeCounts(prev => ({
      ...prev,
      [postId]: prev[postId] ? prev[postId] - 1 : (prev[postId] || 0) + 1
    }));
    toast(feedPostLikes[postId] ? "Post unliked" : "Post liked");
  };
  
  const handleFeedPostComment = (postId: number, comment: string) => {
    setFeedPostComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment]
    }));
    toast(`Comment added: ${comment}`);
  };
  
  const handleBellClick = () => toast("Notifications clicked");
  const handleFlagClick = () => toast("Post flagged");
  const handleMenuAction = (action: string) => toast(`Menu action: ${action}`);
  
  // Templates for RichTextEditor
  const [templates] = useState([
    { id: "1", name: "Welcome Email", content: "<p>Dear {{name}},</p><p>Welcome to our service!</p>" },
    { id: "2", name: "Thank You", content: "<p>Thank you for your order, {{customerName}}!</p>" },
    { id: "3", name: "Meeting Invitation", content: "<p>You are invited to a meeting on {{date}}.</p>" },
  ]);

  // Merge fields for RichTextEditor
  const [mergeFields] = useState([
    { id: "1", label: "Name", value: "name", category: "Contact" },
    { id: "2", label: "Email", value: "email", category: "Contact" },
    { id: "3", label: "Customer Name", value: "customerName", category: "Customer" },
    { id: "4", label: "Order Number", value: "orderNumber", category: "Order" },
    { id: "5", label: "Date", value: "date", category: "Date" },
    { id: "6", label: "Company", value: "company", category: "Contact" },
  ]);

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

  // Example cards for StatCard with NavLink
  const statCards = [
    {
      path: "/dashboard",
      icon: <TrendingUp className="h-6 w-6" />,
      count: 1250,
      count2: 1100,
      title: "Total Revenue",
      subtitle: "Last 30 days",
      color: "success",
    },
    {
      path: "/users",
      icon: <Users className="h-6 w-6" />,
      count: 342,
      count2: 298,
      title: "Active Users",
      subtitle: "This month",
      color: "success",
    },
    {
      path: "/alerts",
      icon: <DollarSign className="h-6 w-6" />,
      count: 15,
      count2: 8,
      title: "Pending Alerts",
      subtitle: "Requires attention",
      color: "warning",
    },
  ];

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

              {/* <div className="space-y-4">
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
              </div> */}
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
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="critical">Critical</Badge>
                  <Badge variant="high">High</Badge>
                  <Badge variant="normal">Normal</Badge>
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

            <Separator />

            {/* Rich Text Editor */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Rich Text Editor</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 1: Basic Usage</h3>
                <div className="space-y-2">
                  <Label>Basic RichTextEditor with defaultContent and onContentChange</Label>
                  <RichTextEditor
                    defaultContent={richTextContent}
                    onContentChange={(content: string) => {
                      console.log("RichTextEditor onContentChange:", content);
                      setRichTextContent(content);
                    }}
                  />
                  <p className="text-sm text-muted-foreground">
                    Current content length: {richTextContent.length} characters
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 2: With Custom ClassName</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with custom styling via className</Label>
                  <RichTextEditor
                    defaultContent={richTextContent2}
                    onContentChange={(content: string) => {
                      console.log("RichTextEditor 2 onContentChange:", content);
                      setRichTextContent2(content);
                    }}
                    className="border-2 border-primary rounded-lg"
                  />
                  <Button onClick={() => setRichTextContent2("<p>Reset content</p>")}>
                    Reset Content
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 3: Hide Menu Bar</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with hidden menu bar</Label>
                  <RichTextEditor
                    defaultContent="<p>This editor has no menu bar</p>"
                    onContentChange={(content: string) => {
                      console.log("Hidden menu bar editor onContentChange:", content);
                    }}
                    hideMenuBar={true}
                  />
                  <p className="text-sm text-muted-foreground">
                    Menu bar is hidden: Users can still type but toolbar is not visible
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 4: File Upload</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with file upload handler</Label>
                  <RichTextEditor
                    defaultContent={richTextContent}
                    onContentChange={(content: string) => {
                      console.log("File upload editor onContentChange:", content);
                      setRichTextContent(content);
                    }}
                    onFileUpload={async (file: File) => {
                      console.log("File upload triggered:", file.name, file.size);
                      toast(`Uploading file: ${file.name}`);
                      // Simulate upload delay
                      await new Promise(resolve => setTimeout(resolve, 1000));
                      // Return file attachment object
                      const result = {
                        id: `file-${Date.now()}`,
                        filename: file.name,
                      };
                      toast.success(`File uploaded: ${file.name}`);
                      return result;
                    }}
                    onFileChange={(files) => {
                      console.log("Files changed:", files);
                      toast(`Total files: ${files.length}`);
                    }}
                  />
                  <p className="text-sm text-muted-foreground">
                    File upload handler will be called when a file is attached. Files will appear below the editor.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 5: Templates</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with templates enabled</Label>
                  <RichTextEditor
                    defaultContent={richTextContent}
                    onContentChange={(content: string) => {
                      console.log("Templates editor onContentChange:", content);
                      setRichTextContent(content);
                    }}
                    hasTemplates={true}
                    templates={templates}
                  />
                  <p className="text-sm text-muted-foreground">
                    Templates button appears in menu bar. Click to insert pre-defined templates.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 6: Merge Fields</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with merge fields enabled</Label>
                  <RichTextEditor
                    defaultContent={richTextContent}
                    onContentChange={(content: string) => {
                      console.log("Merge fields editor onContentChange:", content);
                      setRichTextContent(content);
                    }}
                    hasMergeFields={true}
                    mergeFields={mergeFields}
                  />
                  <p className="text-sm text-muted-foreground">
                    Mail Merge button appears in menu bar. Click to insert merge fields like {'{{'}name{'}}'}, {'{{'}email{'}}'}, etc.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 7: Merge Fields with Filter</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with filtered merge fields</Label>
                  <RichTextEditor
                    defaultContent={richTextContent}
                    onContentChange={(content: string) => {
                      console.log("Filtered merge fields editor onContentChange:", content);
                      setRichTextContent(content);
                    }}
                    hasMergeFields={true}
                    mergeFields={mergeFields}
                    mergeFieldFilter={(field) => {
                      // Only show Contact category fields
                      return field.category === "Contact";
                    }}
                  />
                  <p className="text-muted-foreground">
                    Only merge fields with category "Contact" are shown in the menu
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 8: Form Inputs</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with form inputs enabled</Label>
                  <RichTextEditor
                    defaultContent={richTextContent}
                    onContentChange={(content: string) => {
                      console.log("Form inputs editor onContentChange:", content);
                      setRichTextContent(content);
                    }}
                    hasFormInputs={true}
                  />
                  <p className="text-sm text-muted-foreground">
                    Form inputs feature is enabled (if supported by the component)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 9: Templates and Merge Fields Combined</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with both templates and merge fields</Label>
                  <RichTextEditor
                    defaultContent={richTextContent}
                    onContentChange={(content: string) => {
                      console.log("Combined editor onContentChange:", content);
                      setRichTextContent(content);
                    }}
                    hasTemplates={true}
                    hasMergeFields={true}
                    templates={templates}
                    mergeFields={mergeFields}
                  />
                  <p className="text-sm text-muted-foreground">
                    Both Templates and Mail Merge buttons appear in the menu bar
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 10: File Upload with File Change Tracking</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with file upload and change tracking</Label>
                  <RichTextEditor
                    defaultContent={richTextContent}
                    onContentChange={(content: string) => {
                      console.log("File tracking editor onContentChange:", content);
                      setRichTextContent(content);
                    }}
                    onFileUpload={async (file: File) => {
                      console.log("File upload:", file.name);
                      toast(`Uploading: ${file.name}`);
                      await new Promise(resolve => setTimeout(resolve, 500));
                      return {
                        id: `file-${Date.now()}`,
                        filename: file.name,
                      };
                    }}
                    onFileChange={(files) => {
                      console.log("Files updated:", files);
                      toast(`Files attached: ${files.length}`);
                    }}
                  />
                  <p className="text-sm text-muted-foreground">
                    Both onFileUpload and onFileChange callbacks are used to track file attachments
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 11: All Features Enabled</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with all features enabled</Label>
                  <RichTextEditor
                    defaultContent={richTextContent}
                    onContentChange={(content: string) => {
                      console.log("Full features editor onContentChange:", content);
                      setRichTextContent(content);
                    }}
                    hasTemplates={true}
                    hasMergeFields={true}
                    hasFormInputs={true}
                    templates={templates}
                    mergeFields={mergeFields}
                    onFileUpload={async (file: File) => {
                      console.log("File upload:", file.name);
                      toast(`Uploading: ${file.name}`);
                      await new Promise(resolve => setTimeout(resolve, 500));
                      return {
                        id: `file-${Date.now()}`,
                        filename: file.name,
                      };
                    }}
                    onFileChange={(files) => {
                      console.log("Files:", files);
                    }}
                    className="border-2 border-primary rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground">
                    All features are enabled: Templates, Merge Fields, Form Inputs, and File Upload
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Example 12: All Props Combined</h3>
                <div className="space-y-2">
                  <Label>RichTextEditor with all props used together</Label>
                  <RichTextEditor
                    defaultContent="<p>This is the default content</p>"
                    onContentChange={(content: string) => {
                      console.log("All props editor onContentChange:", content);
                    }}
                    hasMergeFields={true}
                    hasTemplates={true}
                    hasFormInputs={true}
                    hideMenuBar={false}
                    templates={templates}
                    mergeFields={mergeFields}
                    mergeFieldFilter={() => {
                      // Show all fields
                      return true;
                    }}
                    onFileUpload={async (file: File) => {
                      console.log("File upload:", file.name);
                      return {
                        id: `file-${Date.now()}`,
                        filename: file.name,
                      };
                    }}
                    onFileChange={(files) => {
                      console.log("Files changed:", files);
                    }}
                    className="border-2 border-secondary rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground">
                    This example demonstrates all available props used together
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* New Components */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">New Components</h2>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">StatCard</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {statCards.map((card, index) => (
                    <NavLink key={index} to={card?.path} className="block">
                      <StatCard
                        icon={card.icon}
                        value={card.count}
                        value2={card.count2}
                        title={card.title}
                        subtitle={card.subtitle}
                        valueSize="md"
                        color="text-red-500"
                      />
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">StatDisplay</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <StatDisplay
                    current={119}
                    previous={123}
                    label="Current / Previous"
                    subLabel="Active sessions"
                  />
                  <StatDisplay
                    current="98%"
                    label="Uptime"
                    subLabel="Last 30 days"
                  />
                  <StatDisplay
                    current={42}
                    previous={50}
                    label="Capacity"
                    subLabel="Available slots"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">FeedPost - All Configurations</h3>
                
                {/* Example 1: With Comments Display */}
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">With Comments Display</h4>
                  <FeedPost
                    avatar="https://github.com/shadcn.png"
                    avatarFallback="JD"
                    name="John Doe"
                    timestamp="2 hours ago"
                    reference="Posted in General Discussion"
                    content="Just finished working on the new dashboard design. What do you think about the new color scheme?"
                    attachment={{
                      filename: "dashboard-mockup.pdf",
                      onClick: () => toast("Opening attachment")
                    }}
                    likeCount={feedPostLikeCounts[1] || 24}
                    isLiked={feedPostLikes[1] || false}
                    onLike={() => handleFeedPostLike(1)}
                    onComment={(comment: string) => handleFeedPostComment(1, comment)}
                    comments={[
                      {
                        id: "c1",
                        avatar: "https://github.com/shadcn.png",
                        avatarFallback: "AB",
                        name: "Alice Brown",
                        timestamp: "1 hour ago",
                        content: "Great work on the dashboard! The new design looks amazing.",
                        menuItems: [
                          { label: "Reply", onClick: () => toast("Replying to comment") },
                          { label: "Report", onClick: () => toast("Reporting comment") }
                        ]
                      },
                      {
                        id: "c2",
                        avatarFallback: "CD",
                        name: "Charlie Davis",
                        timestamp: "30 minutes ago",
                        content: "I agree! The color scheme is much better now.",
                        backgroundColor: "bg-muted/50"
                      }
                    ]}
                  />
                </div>

                {/* Example 2: With Action Menu Only */}
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">With Action Menu Only</h4>
                  <FeedPost
                    avatarFallback="JS"
                    name="Jane Smith"
                    timestamp="5 hours ago"
                    content="Excited to announce our new feature release! 🎉 Check out the latest updates."
                    showBellIcon={false}
                    showFlagIcon={false}
                    showMenuIcon={true}
                    menuItems={[
                      { label: "Edit Post", onClick: () => handleMenuAction("Edit Post") },
                      { label: "Delete Post", onClick: () => handleMenuAction("Delete Post") },
                      { label: "Share", onClick: () => handleMenuAction("Share") },
                      { label: "Report", onClick: () => handleMenuAction("Report") }
                    ]}
                    likeCount={feedPostLikeCounts[2] || 156}
                    isLiked={feedPostLikes[2] || true}
                    onLike={() => handleFeedPostLike(2)}
                    onComment={(comment: string) => handleFeedPostComment(2, comment)}
                    likesInfo="Fizza Rehan and 155 others like this"
                  />
                </div>

                {/* Example 3: With Flag Icon Only */}
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">With Flag Icon Only</h4>
                  <FeedPost
                    avatar="https://github.com/shadcn.png"
                    avatarFallback="EF"
                    name="Emma Foster"
                    timestamp="1 day ago"
                    content="Important announcement: Please review the updated community guidelines before posting."
                    showBellIcon={false}
                    showFlagIcon={true}
                    showMenuIcon={false}
                    onFlagClick={handleFlagClick}
                    flagIconClassName="text-red-500 hover:text-red-600"
                    likeCount={feedPostLikeCounts[3] || 42}
                    isLiked={feedPostLikes[3] || false}
                    onLike={() => handleFeedPostLike(3)}
                    onComment={(comment: string) => handleFeedPostComment(3, comment)}
                    showCommentInput={false}
                  />
                </div>

                {/* Example 4: With Action Menu, Flag and Notifications Icons */}
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">With Action Menu, Flag and Notifications Icons</h4>
                  <FeedPost
                    avatarFallback="GH"
                    name="George Harrison"
                    timestamp="3 hours ago"
                    reference="📌 Pinned Post"
                    content="Monthly team meeting scheduled for Friday at 3 PM. Please prepare your updates and share any blockers."
                    showBellIcon={true}
                    showFlagIcon={true}
                    showMenuIcon={true}
                    onBellClick={handleBellClick}
                    onFlagClick={handleFlagClick}
                    bellIconClassName="text-blue-500 hover:text-blue-600"
                    flagIconClassName="text-orange-500 hover:text-orange-600"
                    menuItems={[
                      { label: "Pin Post", onClick: () => handleMenuAction("Pin Post") },
                      { label: "Edit", onClick: () => handleMenuAction("Edit") },
                      { label: "Delete", onClick: () => handleMenuAction("Delete") },
                      { label: "Copy Link", onClick: () => handleMenuAction("Copy Link") }
                    ]}
                    likeCount={feedPostLikeCounts[4] || 89}
                    isLiked={feedPostLikes[4] || false}
                    onLike={() => handleFeedPostLike(4)}
                    onComment={(comment: string) => handleFeedPostComment(4, comment)}
                    likesInfo="You and 88 others like this"
                    imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop"
                    comments={[
                      {
                        id: "c3",
                        avatarFallback: "IJ",
                        name: "Ian Johnson",
                        timestamp: "2 hours ago",
                        content: "Thanks for the reminder! I'll prepare my updates.",
                        showMenuIcon: false
                      }
                    ]}
                  />
                </div>

                {/* Example 5: Custom Action Buttons */}
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">With Custom Action Buttons</h4>
                  <FeedPost
                    avatar="https://github.com/shadcn.png"
                    avatarFallback="KL"
                    name="Karen Lee"
                    timestamp="6 hours ago"
                    content="New design system documentation is now available! Check out our comprehensive guide.

\nKey features:
- Color palette
- Typography scale
- Component library
- Usage examples"
                    showBellIcon={false}
                    showFlagIcon={false}
                    showMenuIcon={false}
                    actionButtons={[
                      {
                        icon: Bell,
                        onClick: handleBellClick,
                        className: "text-blue-500 hover:bg-blue-50",
                        ariaLabel: "Subscribe to updates"
                      },
                      {
                        icon: Flag,
                        onClick: handleFlagClick,
                        className: "text-red-500 hover:bg-red-50",
                        ariaLabel: "Bookmark this post"
                      }
                    ]}
                    likeCount={feedPostLikeCounts[5] || 67}
                    isLiked={feedPostLikes[5] || false}
                    onLike={() => handleFeedPostLike(5)}
                    onComment={(comment: string) => handleFeedPostComment(5, comment)}
                    attachment={{
                      filename: "design-system-guide.pdf",
                      onClick: () => toast("Opening design system guide")
                    }}
                  />
                </div>

                {/* Example 6: Minimal Version - No Actions */}
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Minimal Version - No Actions</h4>
                  <FeedPost
                    avatarFallback="MN"
                    name="Michael Nguyen"
                    timestamp="2 days ago"
                    content="Quick update: Server maintenance completed successfully. All systems are now operational."
                    showBellIcon={false}
                    showFlagIcon={false}
                    showMenuIcon={false}
                    showLikeButton={false}
                    showCommentInput={false}
                    likeCount={0}
                    isLiked={false}
                    onLike={() => {}}
                    onComment={() => {}}
                  />
                </div>

                {/* Example 7: With Custom Render Actions */}
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">With Custom Render Actions</h4>
                  <FeedPost
                    avatar="https://github.com/shadcn.png"
                    avatarFallback="OP"
                    name="Olivia Parker"
                    timestamp="4 hours ago"
                    content="🚀 Launch day! Our new feature is now live. Try it out and let us know what you think!"
                    renderActions={() => (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleBellClick}
                          className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
                        >
                          Follow
                        </button>
                        <button
                          onClick={handleFlagClick}
                          className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200"
                        >
                          Endorse
                        </button>
                        <button
                          onClick={() => handleMenuAction("Share")}
                          className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200"
                        >
                          Share
                        </button>
                      </div>
                    )}
                    likeCount={feedPostLikeCounts[6] || 234}
                    isLiked={feedPostLikes[6] || true}
                    onLike={() => handleFeedPostLike(6)}
                    onComment={(comment: string) => handleFeedPostComment(6, comment)}
                    likesInfo="235 people like this"
                  />
                </div>

                {/* Example 8: With Custom Render Interactions */}
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">With Custom Render Interactions</h4>
                  <FeedPost
                    avatarFallback="QR"
                    name="Quinn Roberts"
                    timestamp="8 hours ago"
                    content="Poll: What's your favorite UI framework? Vote below! 👇"
                    showBellIcon={true}
                    showFlagIcon={true}
                    showMenuIcon={true}
                    onBellClick={handleBellClick}
                    onFlagClick={handleFlagClick}
                    menuItems={[
                      { label: "Edit Poll", onClick: () => handleMenuAction("Edit Poll") },
                      { label: "Close Poll", onClick: () => handleMenuAction("Close Poll") },
                      { label: "Share Results", onClick: () => handleMenuAction("Share Results") }
                    ]}
                    renderInteractions={() => (
                      <div className="space-y-3">
                        <div className="flex gap-2 flex-wrap">
                          {[
                            { label: "React", votes: 45, color: "bg-blue-500" },
                            { label: "Vue", votes: 23, color: "bg-green-500" },
                            { label: "Angular", votes: 18, color: "bg-red-500" },
                            { label: "Svelte", votes: 12, color: "bg-orange-500" }
                          ].map((option) => (
                            <button
                              key={option.label}
                              onClick={() => toast(`Voted for ${option.label}`)}
                              className="px-3 py-2 text-sm border rounded-lg hover:bg-accent transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${option.color}`} />
                                <span>{option.label}</span>
                                <span className="text-muted-foreground">({option.votes})</span>
                              </div>
                            </button>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>98 votes</span>
                          <span>•</span>
                          <span>2 days left</span>
                        </div>
                      </div>
                    )}
                    likeCount={feedPostLikeCounts[7] || 56}
                    isLiked={feedPostLikes[7] || false}
                    onLike={() => handleFeedPostLike(7)}
                    onComment={(comment: string) => handleFeedPostComment(7, comment)}
                    showCommentInput={false}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Comment</h3>
                <div className="space-y-4 max-w-2xl">
                  <Comment
                    avatar="https://github.com/shadcn.png"
                    avatarFallback="AB"
                    name="Alice Brown"
                    timestamp="1 hour ago"
                    content="Great work on the dashboard! The new design looks amazing."
                    onAction={(action) => toast(`Action: ${action}`)}
                  />
                  <Comment
                    avatar="https://github.com/shadcn.png"
                    avatarFallback="CD"
                    name="Charlie Davis"
                    timestamp="30 minutes ago"
                    content="I agree! The color scheme is much better now."
                    isNested={true}
                    onAction={(action) => toast(`Action: ${action}`)}
                  />
                  <Comment
                    avatar="https://github.com/shadcn.png"
                    avatarFallback="EF"
                    name="Emma Foster"
                    timestamp="15 minutes ago"
                    content="Can we also add dark mode support?"
                    onAction={(action) => toast(`Action: ${action}`)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Attachment</h3>
                <div className="space-y-2 max-w-md">
                  <Attachment
                    filename="project-proposal.pdf"
                    onClick={() => toast("Opening project-proposal.pdf")}
                  />
                  <Attachment
                    filename="design-mockups.zip"
                    variant="default"
                    onClick={() => toast("Opening design-mockups.zip")}
                  />
                  <Attachment
                    filename="very-long-filename-that-should-be-truncated.pdf"
                    onClick={() => toast("Opening file")}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Timeline</h3>
                <div className="max-w-4xl">
                  <Timeline
                    items={[
                      {
                        id: '1',
                        title: 'Ongoing Reminder',
                        startTime: '03:15 PM',
                        endTime: '04:15 PM',
                        color: '#a855f7', // lighter purple/pink
                      },
                      {
                        id: '2',
                        title: 'Yoga Session',
                        startTime: '04:15 PM',
                        endTime: '05:15 PM',
                        capacity: {
                          current: 0,
                          max: 10,
                        },
                        color: '#7c3aed', // deep purple
                      },
                      {
                        id: '3',
                        title: 'Account Wide Session -- Demo',
                        startTime: '04:00 PM',
                        endTime: '06:00 PM',
                        capacity: {
                          current: 0,
                          max: 50,
                        },
                        color: '#7c3aed', // deep purple
                      },
                      {
                        id: '4',
                        title: 'Karate',
                        startTime: '07:04 PM',
                        endTime: '11:00 PM',
                        capacity: {
                          current: 1,
                          max: 100,
                        },
                        color: '#7c3aed', // deep purple
                      },
                    ]}
                    startHour={15} // 3 PM
                    endHour={20} // 8 PM
                    hourFormat="12h"
                    title="Agenda"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">ProfileCard</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                  <ProfileCard
                    avatar="https://github.com/shadcn.png"
                    avatarFallback="JD"
                    details={[
                      { label: "Name", value: "John Doe" },
                      { label: "Email", value: "john.doe@example.com" },
                      { label: "Timezone", value: "UTC-5 (EST)" },
                      { label: "Role", value: "Administrator" },
                    ]}
                    actions={[
                      {
                        label: "Change Password",
                        onClick: () => toast("Change password clicked"),
                        variant: "outline",
                      },
                      {
                        label: "Edit",
                        onClick: () => toast("Edit clicked"),
                        variant: "default",
                      },
                    ]}
                  />
                  <ProfileCard
                    avatarFallback="JS"
                    details={[
                      { label: "Name", value: "Jane Smith" },
                      { label: "Email", value: "jane.smith@example.com" },
                      { label: "Timezone", value: "UTC+0 (GMT)" },
                      { label: "Role", value: "User" },
                    ]}
                    actions={[
                      {
                        label: "Edit Profile",
                        onClick: () => toast("Edit profile clicked"),
                        variant: "outline",
                      },
                    ]}
                  />
                </div>
              </div>
            </section>

            {/* Profile Cards */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold border-b pb-2">Profile Cards</h2>
              
              {/* Basic Profile Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Basic Profile Card</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ProfileCard
                    avatar={{
                      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
                      fallback: "JD",
                      size: "lg"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "John Doe" } },
                      { label: "Email", value: { type: "text", value: "john.doe@example.com" } },
                      { label: "Location", value: { type: "text", value: "San Francisco, CA" } },
                      { label: "Department", value: { type: "tag", value: "Engineering" } }
                    ]}
                    actions={[
                      { label: "View Profile", onClick: () => toast("View profile clicked") },
                      { label: "Message", onClick: () => toast("Message clicked"), variant: "outline" }
                    ]}
                  />
                  
                  <ProfileCard
                    avatar={{
                      fallback: "AS",
                      size: "xl"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Alice Smith" } },
                      { label: "Role", value: { type: "text", value: "Product Designer" } },
                      { label: "Status", value: { type: "tag", value: "Available", className: "bg-green-100 text-green-800" } },
                      { label: "Projects", value: { type: "text", value: "12 Active" } },
                      { label: "Team", value: { type: "text", value: "Design Team" } }
                    ]}
                    actions={[
                      { label: "Schedule", onClick: () => toast("Schedule clicked") }
                    ]}
                  />
                </div>
              </div>

              {/* Different Layouts */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Layout Variations</h3>
                <div className="space-y-6">
                  {/* Horizontal Layout */}
                  <ProfileCard
                    layout={{
                      direction: "horizontal",
                      spacing: "lg",
                      padding: "lg",
                      alignment: "start"
                    }}
                    avatar={{
                      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
                      fallback: "EJ",
                      size: "xl"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Emma Johnson" } },
                      { label: "Role", value: { type: "text", value: "Marketing Director" } },
                      { label: "Experience", value: { type: "text", value: "8+ years" } },
                      { label: "Specialization", value: { type: "tag", value: "Digital Marketing" } },
                      { label: "Team Size", value: { type: "text", value: "15 members" } }
                    ]}
                    actions={[
                      { label: "Contact", onClick: () => toast("Contact clicked") },
                      { label: "View Work", onClick: () => toast("View work clicked"), variant: "outline" }
                    ]}
                  />

                  {/* Compact Layout */}
                  <ProfileCard
                    layout={{
                      direction: "vertical",
                      spacing: "sm",
                      padding: "sm",
                      alignment: "center"
                    }}
                    avatar={{
                      fallback: "MR",
                      size: "md"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Michael Roberts" } },
                      { label: "Role", value: { type: "text", value: "Backend Engineer" } },
                      { label: "Skills", value: { type: "tag", value: "Node.js" } },
                      { label: "Experience", value: { type: "text", value: "5 years" } }
                    ]}
                    actions={[
                      { label: "GitHub", onClick: () => toast("GitHub clicked"), size: "sm" }
                    ]}
                  />
                </div>
              </div>

              {/* Value Types Demonstration */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Different Detail Types</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <ProfileCard
                    avatar={{
                      fallback: "TW",
                      size: "xl",
                      className: "bg-gray-200 text-gray-800 !rounded-[10%]"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Tom Wilson" } },
                      { label: "Role", value: { type: "text", value: "Full Stack Developer" } },
                      { label: "Email", value: { type: "text", value: "tom.wilson@company.com" } },
                      { label: "Level", value: { type: "tag", value: "Senior", className: "bg-blue-100 text-blue-800" } },
                      { label: "Status", value: { type: "tag", value: "On Leave", className: "bg-yellow-100 text-yellow-800" } },
                      { 
                        label: "Rating", 
                        value: { 
                          type: "custom", 
                          component: (
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-yellow-400">
                                  {star <= 4 ? "★" : "☆"}
                                </span>
                              ))}
                              <span className="text-sm text-muted-foreground ml-1">(4.0)</span>
                            </div>
                          )
                        } 
                      }
                    ]}
                  />
                  
                  <ProfileCard
                    avatar={{
                      fallback: "SL",
                      size: "lg"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Sarah Lee" } },
                      { label: "Role", value: { type: "text", value: "Data Scientist" } },
                      { label: "Publications", value: { type: "text", value: "23 papers" } },
                      { 
                        label: "Skills", 
                        value: { 
                          type: "custom", 
                          component: (
                            <div className="flex gap-1">
                              {["Python", "ML", "Stats"].map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )
                        } 
                      },
                      { 
                        label: "Progress", 
                        value: { 
                          type: "custom", 
                          component: (
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                              </div>
                              <span className="text-xs text-muted-foreground">75%</span>
                            </div>
                          )
                        } 
                      },
                      { label: "Department", value: { type: "text", value: "Research" } }
                    ]}
                  />
                </div>
              </div>

              {/* Avatar Variations */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Avatar Variations</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <ProfileCard
                    avatar={{
                      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
                      fallback: "SM",
                      size: "sm"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Small Avatar" } },
                      { label: "Type", value: { type: "tag", value: "With Image" } }
                    ]}
                  />
                  
                  <ProfileCard
                    avatar={{
                      fallback: "MD",
                      size: "md"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Medium Avatar" } },
                      { label: "Type", value: { type: "tag", value: "Fallback Only" } }
                    ]}
                  />
                  
                  <ProfileCard
                    avatar={{
                      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
                      fallback: "LG",
                      size: "lg"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Large Avatar" } },
                      { label: "Type", value: { type: "tag", value: "With Image" } }
                    ]}
                  />
                  
                  <ProfileCard
                    avatar={{
                      fallback: "XL",
                      size: "xl"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Extra Large" } },
                      { label: "Type", value: { type: "tag", value: "Fallback Only" } }
                    ]}
                  />
                </div>
              </div>

              {/* Styling Variations */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Styling Variations</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <ProfileCard
                    styles={{
                      card: "bg-gray-900 border-gray-700",
                      content: "text-white",
                      label: "text-gray-400",
                      value: "text-white font-medium"
                    }}
                    avatar={{
                      fallback: "DK",
                      size: "lg",
                      className: "bg-gray-800 text-white border-gray-600"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Dark Theme" } },
                      { label: "Style", value: { type: "text", value: "Custom styling" } },
                      { label: "Mode", value: { type: "text", value: "Night mode" } },
                      { label: "Theme", value: { type: "tag", value: "Dark", className: "bg-gray-700 text-gray-200" } }
                    ]}
                    actions={[
                      { label: "Toggle", onClick: () => toast("Toggle theme"), className: "bg-gray-800 text-white hover:bg-gray-700" }
                    ]}
                  />

                  <ProfileCard
                    styles={{
                      card: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
                      detailsContainer: "space-y-2"
                    }}
                    avatar={{
                      fallback: "CP",
                      size: "lg",
                      className: "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Colorful Profile" } },
                      { label: "Style", value: { type: "text", value: "Gradient design" } },
                      { label: "Design", value: { type: "text", value: "Modern UI" } },
                      { label: "Theme", value: { type: "tag", value: "Gradient", className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white" } }
                    ]}
                    actions={[
                      { label: "Customize", onClick: () => toast("Customize clicked"), className: "bg-purple-600 text-white hover:bg-purple-700" }
                    ]}
                  />
                </div>
              </div>

              {/* Interactive Examples */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Interactive Examples</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <ProfileCard
                    avatar={{
                      fallback: "IA",
                      size: "lg"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Interactive Avatar" } },
                      { label: "Followers", value: { type: "text", value: "1,234" } },
                      { label: "Following", value: { type: "text", value: "567" } },
                      { label: "Status", value: { type: "tag", value: "Active" } }
                    ]}
                    actions={[
                      { 
                        label: feedPostLikes[0] ? "Unfollow" : "Follow", 
                        onClick: () => handleFeedPostLike(0),
                        variant: feedPostLikes[0] ? "destructive" : "default"
                      },
                      { label: "Message", onClick: () => toast("Message sent"), variant: "outline" }
                    ]}
                  />

                  <ProfileCard
                    layout={{
                      actionsPosition: "center"
                    }}
                    avatar={{
                      fallback: "TS",
                      size: "lg"
                    }}
                    details={[
                      { label: "Name", value: { type: "text", value: "Task Manager" } },
                      { label: "Role", value: { type: "text", value: "Productivity tools" } },
                      { 
                        label: "Tasks", 
                        value: { 
                          type: "custom", 
                          component: (
                            <div className="flex items-center gap-2">
                              <span className="text-sm">8/10</span>
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                              </div>
                            </div>
                          )
                        } 
                      },
                      { label: "Priority", value: { type: "tag", value: "High", className: "bg-red-100 text-red-800" } }
                    ]}
                    actions={[
                      { label: "Add Task", onClick: () => toast("Add task clicked") },
                      { label: "View All", onClick: () => toast("View all tasks"), variant: "outline" }
                    ]}
                  />
                </div>
              </div>

              {/* No Avatar Example */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Without Avatar (Contact Information)</h3>
                <ProfileCard
                  header={{ title: "Contact Information" }}
                  details={[
                    { label: "Contact Name", value: { type: "text", value: "Miss Phillip Kim" } },
                    { label: "Town", value: { type: "text", value: "Eastleigh" } },
                    { label: "County", value: { type: "text", value: "Hampshire" } },
                    { label: "Post Code", value: { type: "text", value: "SO50 7FA" } },
                    { label: "E-Mail Address", value: { type: "text", value: "grayphite@yopmail.com" } },
                    { label: "Telephone Mobile", value: { type: "text", value: "+44 18724786258" } }
                  ]}
                  actions={[
                    { label: "Edit Information", onClick: () => toast("Edit Information clicked") }
                  ]}
                />
              </div>

              {/* Profile with Image Example */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Profile with Image</h3>
                <ProfileCard
                  avatar={{ 
                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
                    fallback: "TL",
                    size: "lg"
                  }}
                  details={[
                    { label: "Name", value: { type: "text", value: "Mr Tobias Luvis" } },
                    { label: "Reference", value: { type: "text", value: "GB-4825-2226" } },
                    { label: "Location", value: { type: "text", value: "Demo Martial Arts Academy II" } },
                    { label: "Gender", value: { type: "text", value: "Male" } },
                    { label: "Groups", value: { type: "tag", value: "Adults", className: "bg-purple-500 text-white" } },
                    { label: "Key Person", value: { type: "text", value: "Fizza Rehan" } },
                    { label: "Allow Photography", value: { type: "text", value: "No" } }
                  ]}
                  actions={[
                    { label: "Edit Profile", onClick: () => toast("Edit Profile clicked") }
                  ]}
                />
              </div>
            </section>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
