import React, { createContext, useContext, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  initialUserProfile,
  initialInitiatives,
  initialVolunteerRoles,
  initialUrgentSupplies,
  initialActiveRequests,
  initialRegisteredEvents,
  initialNotifications,
  dropoffHubs
} from '../data/initialData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation: 'home' | 'get-help' | 'get-involved' | 'profile' | 'request-success'
  const [activeScreen, setActiveScreen] = useState('home');
  const [previousScreen, setPreviousScreen] = useState('home');

  // UI view mode: 'mobile-frame' (iPhone mockup) or 'responsive' (full width responsive container)
  const [viewMode, setViewMode] = useState('mobile-frame');

  // App Data states
  const [userProfile, setUserProfile] = useState(initialUserProfile);
  const [initiatives, setInitiatives] = useState(initialInitiatives);
  const [volunteerRoles, setVolunteerRoles] = useState(initialVolunteerRoles);
  const [urgentSupplies, setUrgentSupplies] = useState(initialUrgentSupplies);
  const [activeRequests, setActiveRequests] = useState(initialActiveRequests);
  const [lastSubmittedRequest, setLastSubmittedRequest] = useState(initialActiveRequests[0]);
  const [registeredEvents, setRegisteredEvents] = useState(initialRegisteredEvents);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Modals state
  const [activeModal, setActiveModal] = useState(null);
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Toast banner
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const navigateTo = (screen) => {
    setPreviousScreen(activeScreen);
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Submit Help Request
  const submitAssistanceRequest = (formData) => {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const newId = `HOPE-${randomId}`;

    const newRequest = {
      id: newId,
      title: `${formData.supportTypes.join(' & ') || 'Community Care Support'} Package`,
      categories: formData.supportTypes.length > 0 ? formData.supportTypes : ['Emergency Assistance'],
      status: formData.urgentNeed ? 'Priority Review' : 'In Queue',
      statusBadge: formData.urgentNeed ? 'bg-amber-100 text-amber-800 border-amber-300' : 'bg-purple-100 text-purple-700 border-purple-200',
      submittedDate: 'Today',
      readyNotice: 'SUBMISSION CONFIRMED',
      hubName: formData.supportPreference === 'pickup' ? 'Downtown Grace Center' : 'Home Delivery Coordination',
      hubAddress: formData.supportPreference === 'pickup' ? '345 N Boulevard, Baton Rouge, LA' : 'Direct to Resident Doorstep',
      contact: `${formData.contactValue} • ${formData.contactMethod === 'phone' ? 'Phone/SMS' : 'Email'} Preferred`,
      fulfillmentType: formData.supportPreference === 'pickup'
        ? 'Community Pickup Hub (Downtown Grace Center)'
        : 'Confidential Home Drop-off (Discreet Parcel)',
      urgentNeed: formData.urgentNeed,
      notes: formData.additionalNotes,
      householdSize: formData.householdSize,
      applicantName: formData.fullName || userProfile.name,
      currentStep: 1,
      steps: [
        {
          step: 1,
          title: 'Review & Preparation',
          desc: 'A dedicated community coordinator is reviewing your needs within 24 hours to organize the package.',
          status: 'current'
        },
        {
          step: 2,
          title: 'Confidential Outreach',
          desc: `You'll receive a friendly confirmation ${formData.contactMethod === 'email' ? 'email' : 'text message'} outlining pickup times and safe location details.`,
          status: 'upcoming'
        },
        {
          step: 3,
          title: 'Support Delivery',
          desc: 'Care items provided seamlessly with dignity, warm smiles, and complete personal confidentiality.',
          status: 'upcoming'
        }
      ]
    };

    setActiveRequests((prev) => [newRequest, ...prev]);
    setLastSubmittedRequest(newRequest);

    // Add notification
    const newNotification = {
      id: `notif-${Date.now()}`,
      title: 'Assistance Request Received',
      body: `Ticket #${newId} is queued for our care coordination team.`,
      time: 'Just now',
      unread: true,
      type: 'request'
    };
    setNotifications((prev) => [newNotification, ...prev]);

    // Confetti celebration
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#7033E3', '#B688F1', '#F59E0B', '#10B981']
      });
    } catch (e) {
      // safe fallback
    }

    navigateTo('request-success');
    showToast('Your confidential assistance request has been received.');
  };

  // Toggle supply item pledge
  const toggleSupplyPledge = (id) => {
    setUrgentSupplies((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextState = !item.pledged;
          if (nextState) {
            showToast(`Pledged: ${item.title}`);
          }
          return { ...item, pledged: nextState };
        }
        return item;
      })
    );
  };

  const pledgedCount = urgentSupplies.filter((item) => item.pledged).length;

  // Volunteer registration toggle
  const toggleVolunteerRole = (roleId) => {
    setVolunteerRoles((prev) =>
      prev.map((role) => {
        if (role.id === roleId) {
          const isRegistered = !role.registered;

          if (isRegistered) {
            showToast(`Registered for ${role.title}!`);
            try {
              confetti({
                particleCount: 50,
                spread: 50,
                origin: { y: 0.7 },
                colors: ['#7033E3', '#F59E0B']
              });
            } catch (e) {}

            // Add to registered events if not present
            setRegisteredEvents((prevEvents) => [
              ...prevEvents,
              {
                id: `evt-${Date.now()}`,
                dateMonth: 'NOV',
                dateDay: '25',
                title: role.title,
                status: 'Confirmed',
                schedule: role.schedule,
                location: role.location,
                address: role.location,
                contactPerson: 'Volunteer Lead & Voices of Virtue Staff',
                notes: 'Thank you for serving! Check in at the entrance 10 minutes prior.'
              }
            ]);

            // Add Virtue Points
            setUserProfile((prevProfile) => ({
              ...prevProfile,
              virtuePoints: prevProfile.virtuePoints + 25,
              impact: {
                ...prevProfile.impact,
                drivesSupported: prevProfile.impact.drivesSupported + 1
              }
            }));
          } else {
            showToast(`Registration cancelled for ${role.title}.`, 'info');
            setRegisteredEvents((prevEvents) =>
              prevEvents.filter((ev) => ev.title !== role.title)
            );
          }

          return {
            ...role,
            registered: isRegistered,
            spotsOpen: isRegistered ? Math.max(0, role.spotsOpen - 1) : role.spotsOpen + 1
          };
        }
        return role;
      })
    );
  };

  // Process donation
  const processDonation = (amount, isMonthly, note = '') => {
    setUserProfile((prev) => ({
      ...prev,
      virtuePoints: prev.virtuePoints + Math.round(amount * 2),
      impact: {
        ...prev.impact,
        mealsProvided: prev.impact.mealsProvided + Math.round(amount * 4)
      }
    }));

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#7033E3', '#F59E0B', '#E11D48', '#10B981']
      });
    } catch (e) {}

    showToast(`Heartfelt thank you for your $${amount}${isMonthly ? '/mo' : ''} gift!`);
  };

  // Toggle user preference
  const togglePreference = (key) => {
    setUserProfile((prev) => {
      const newVal = !prev.preferences[key];
      showToast(`Updated preference: ${key === 'urgentNeedAlerts' ? 'Urgent Need Alerts' : 'Volunteer Reminders'} is now ${newVal ? 'ON' : 'OFF'}`);
      return {
        ...prev,
        preferences: {
          ...prev.preferences,
          [key]: newVal
        }
      };
    });
  };

  // Mark all notifications read
  const markNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const unreadNotificationsCount = notifications.filter((n) => n.unread).length;

  return (
    <AppContext.Provider
      value={{
        activeScreen,
        previousScreen,
        navigateTo,
        viewMode,
        setViewMode,
        userProfile,
        setUserProfile,
        initiatives,
        setInitiatives,
        volunteerRoles,
        toggleVolunteerRole,
        urgentSupplies,
        toggleSupplyPledge,
        pledgedCount,
        activeRequests,
        lastSubmittedRequest,
        submitAssistanceRequest,
        registeredEvents,
        notifications,
        isNotificationsOpen,
        setIsNotificationsOpen,
        markNotificationsAsRead,
        unreadNotificationsCount,
        activeModal,
        setActiveModal,
        selectedInitiative,
        setSelectedInitiative,
        selectedEvent,
        setSelectedEvent,
        dropoffHubs,
        processDonation,
        togglePreference,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
