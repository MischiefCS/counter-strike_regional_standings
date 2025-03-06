### Roster Details<br />
Team Name: Undone<br />
Roster: chop, cxzi, motm, Skadoodle, steel<br />
Global Rank: [95](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  718.9<br />
<br />
Final Rank Value (718.9) = Starting Rank Value (718.5) + Head To Head Adjustments (0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.129[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.5
- 400 + ( ( 0.146 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 718.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      860 | 2024-12-14 | Bad News Capybaras | W   | 0.254      | 0.143        | 0.000 (0.000)    | 0.076 (0.003)    | 0 (0.000) |     2.09 | chop, cxzi, motm, Skadoodle, steel |
|           11 |      887 | 2024-12-13 | Alter Iron Club    | W   | 0.248      | 0.143        | 0.008 (0.000)    | 0.234 (0.008)    | 0 (0.000) |     3.69 | chop, cxzi, motm, Skadoodle, steel |
|           10 |      922 | 2024-12-11 | Bad News Capybaras | W   | 0.234      | 0.143        | 0.000 (0.000)    | 0.076 (0.003)    | 0 (0.000) |     1.93 | chop, cxzi, motm, Skadoodle, steel |
|            9 |      933 | 2024-12-10 | InControl          | W   | 0.227      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.07 | chop, cxzi, motm, Skadoodle, steel |
|            8 |      962 | 2024-12-08 | Nouns Esports      | L   | 0.212      | -            | -                | -                | -         |    -2.91 | chop, cxzi, motm, steel, taggy     |
|            7 |      971 | 2024-12-07 | MIGHT              | W   | 0.208      | 0.384        | 0.000 (0.000)    | 0.258 (0.021)    | 1 (0.208) |     1.91 | chop, cxzi, motm, steel, taggy     |
|            6 |      977 | 2024-12-07 | Fisher College     | W   | 0.207      | 0.384        | 0.000 (0.000)    | 0.023 (0.002)    | 1 (0.207) |     1.10 | chop, cxzi, motm, steel, taggy     |
|            5 |      980 | 2024-12-07 | NRG                | L   | 0.206      | -            | -                | -                | -         |    -1.82 | chop, cxzi, motm, steel, taggy     |
|            4 |     1001 | 2024-12-06 | Anti-Eco Club      | W   | 0.201      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.201) |     0.94 | chop, cxzi, motm, steel, taggy     |
|            3 |     1031 | 2024-12-05 | Alter Iron Club    | L   | 0.194      | -            | -                | -                | -         |    -3.27 | chop, cxzi, motm, Skadoodle, steel |
|            2 |     1104 | 2024-12-02 | Make Your Mind     | L   | 0.174      | -            | -                | -                | -         |    -2.88 | chop, cxzi, motm, Skadoodle, steel |
|            1 |     1275 | 2024-11-23 | BOSS               | L   | 0.112      | -            | -                | -                | -         |    -1.50 | chop, cxzi, motm, Skadoodle, steel |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($267.53)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.214 | $1,250.00      | $267.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
