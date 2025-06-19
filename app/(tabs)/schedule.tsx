import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Text, 
  Card, 
  FAB,
  useTheme,
  Chip
} from 'react-native-paper';
import { Calendar, Clock, Bell, Pill } from 'lucide-react-native';

export default function ScheduleScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>
            Schedule
          </Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
            Keep track of appointments and reminders
          </Text>
        </View>

        {/* Today's Schedule */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Today's Schedule
          </Text>
          
          <Card style={styles.scheduleCard}>
            <Card.Content>
              <View style={styles.scheduleItem}>
                <View style={styles.scheduleHeader}>
                  <Pill size={20} color={theme.colors.primary} />
                  <View style={styles.scheduleInfo}>
                    <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                      Morning Medication
                    </Text>
                    <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                      Heartworm prevention pill
                    </Text>
                  </View>
                  <Chip 
                    compact 
                    style={{ backgroundColor: theme.colors.tertiary }}
                    textStyle={{ color: theme.colors.onTertiary }}
                  >
                    8:00 AM
                  </Chip>
                </View>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.scheduleCard}>
            <Card.Content>
              <View style={styles.scheduleItem}>
                <View style={styles.scheduleHeader}>
                  <Bell size={20} color={theme.colors.secondary} />
                  <View style={styles.scheduleInfo}>
                    <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                      Feeding Time
                    </Text>
                    <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                      Evening meal - 1.5 cups
                    </Text>
                  </View>
                  <Chip 
                    compact 
                    style={{ backgroundColor: theme.colors.secondaryContainer }}
                    textStyle={{ color: theme.colors.onSecondaryContainer }}
                  >
                    6:00 PM
                  </Chip>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>

        {/* Upcoming Appointments */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Upcoming Appointments
          </Text>
          
          <Card style={styles.appointmentCard}>
            <Card.Content>
              <View style={styles.appointmentHeader}>
                <Calendar size={24} color={theme.colors.primary} />
                <View style={styles.appointmentInfo}>
                  <Text variant="titleSmall" style={{ color: theme.colors.onSurface }}>
                    Vet Checkup
                  </Text>
                  <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                    Dr. Sarah Johnson
                  </Text>
                  <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                    Annual wellness exam
                  </Text>
                </View>
              </View>
              <View style={styles.appointmentDetails}>
                <Chip 
                  compact 
                  style={{ backgroundColor: theme.colors.primaryContainer }}
                  textStyle={{ color: theme.colors.onPrimaryContainer }}
                >
                  March 15, 2024
                </Chip>
                <Chip 
                  compact 
                  style={{ backgroundColor: theme.colors.surfaceVariant, marginLeft: 8 }}
                  textStyle={{ color: theme.colors.onSurfaceVariant }}
                >
                  2:30 PM
                </Chip>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.appointmentCard}>
            <Card.Content>
              <View style={styles.appointmentHeader}>
                <Calendar size={24} color={theme.colors.tertiary} />
                <View style={styles.appointmentInfo}>
                  <Text variant="titleSmall" style={{ color: theme.colors.onSurface }}>
                    Grooming Session
                  </Text>
                  <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                    Pampered Paws Salon
                  </Text>
                  <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                    Full grooming package
                  </Text>
                </View>
              </View>
              <View style={styles.appointmentDetails}>
                <Chip 
                  compact 
                  style={{ backgroundColor: theme.colors.tertiaryContainer }}
                  textStyle={{ color: theme.colors.onTertiaryContainer }}
                >
                  March 22, 2024
                </Chip>
                <Chip 
                  compact 
                  style={{ backgroundColor: theme.colors.surfaceVariant, marginLeft: 8 }}
                  textStyle={{ color: theme.colors.onSurfaceVariant }}
                >
                  10:00 AM
                </Chip>
              </View>
            </Card.Content>
          </Card>
        </View>

        {/* Recent Reminders */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Recent Reminders
          </Text>
          
          <Card style={styles.reminderCard}>
            <Card.Content>
              <View style={styles.reminderItem}>
                <Clock size={18} color={theme.colors.onSurfaceVariant} />
                <View style={styles.reminderInfo}>
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                    Nail trimming due
                  </Text>
                  <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                    Last trimmed 6 weeks ago
                  </Text>
                </View>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.reminderCard}>
            <Card.Content>
              <View style={styles.reminderItem}>
                <Clock size={18} color={theme.colors.onSurfaceVariant} />
                <View style={styles.reminderInfo}>
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                    Flea & tick prevention
                  </Text>
                  <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                    Due in 3 days
                  </Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>

      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        color={theme.colors.onPrimary}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    paddingHorizontal: 20,
    marginBottom: 12,
    fontWeight: '600',
  },
  scheduleCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    elevation: 1,
    borderRadius: 12,
  },
  scheduleItem: {
    gap: 8,
  },
  scheduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  scheduleInfo: {
    flex: 1,
  },
  appointmentCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    elevation: 2,
    borderRadius: 12,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reminderCard: {
    marginHorizontal: 20,
    marginBottom: 8,
    elevation: 1,
    borderRadius: 12,
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  reminderInfo: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 16,
  },
});