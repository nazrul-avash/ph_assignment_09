const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-violet-200 border-t-violet-700" />

        <p className="text-sm font-medium text-slate-600">
          Loading your bookings...
        </p>

      </div>
    </div>
  );
};

export default Loading;