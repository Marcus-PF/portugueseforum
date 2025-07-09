/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @pfsa/ui – Admin Layout Skeleton             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Loading skeleton component for admin layout providing
 * proper loading states while data is being fetched.
 *
 * Exports:
 *  - `AdminSkeleton` → Admin layout loading skeleton
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Skeleton } from '../../atoms';

/* ─────────────────────────────────────────────────────────────
 * 🧠 Admin Skeleton Component
 * ───────────────────────────────────────────────────────────── */
export function AdminSkeleton() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar Skeleton */}
      <div className="w-64 border-r bg-background p-4">
        {/* Header */}
        <div className="mb-6 flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <div className="flex-1">
            <Skeleton className="mb-1 h-4 w-24" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
        
        {/* Navigation Groups */}
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, groupIndex) => (
            <div key={groupIndex} className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <div className="space-y-1">
                {Array.from({ length: 4 }).map((_, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 rounded-lg p-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-auto pt-4">
          <div className="flex items-center gap-2 rounded-lg p-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Header Skeleton */}
        <div className="flex h-16 items-center justify-between border-b bg-background px-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-8 md:hidden" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
        
        {/* Content Skeleton */}
        <div className="flex-1 p-6">
          <div className="space-y-6">
            {/* Page Title */}
            <div className="space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-96" />
            </div>
            
            {/* Content Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="rounded-lg border p-4 space-y-3">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Data Table Skeleton */}
            <div className="rounded-lg border">
              <div className="p-4 border-b">
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="divide-y">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="p-4 flex items-center gap-4">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-16 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Skeleton */}
        <div className="border-t bg-background p-4">
          <div className="container mx-auto flex items-center justify-between">
            <Skeleton className="h-4 w-64" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}