### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hampus, isak, L00m1, Plopski<br />
Global Rank: [65](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [46]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  523.5<br />
<br />
Final Rank Value (523.5) = Starting Rank Value (519.5) + Head To Head Adjustments (4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.5
- 400 + ( ( 0.048 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 519.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      333 | 2025-02-11 | HEROIC            | L   | 0.225      | -            | -                | -                | -         |    -0.55 | adamb, hampus, isak, L00m1, Plopski |
|            6 |      342 | 2025-02-11 | Nemiga Gaming     | W   | 0.223      | 0.143        | 0.010 (0.000)    | 0.251 (0.008)    | 0 (0.000) |     5.42 | adamb, hampus, isak, L00m1, Plopski |
|            5 |      360 | 2025-02-10 | GamerLegion       | L   | 0.219      | -            | -                | -                | -         |    -0.09 | adamb, hampus, isak, L00m1, Plopski |
|            4 |      369 | 2025-02-10 | Nexus Gaming      | W   | 0.217      | 0.143        | 0.010 (0.000)    | 0.093 (0.003)    | 0 (0.000) |     4.27 | adamb, hampus, isak, L00m1, Plopski |
|            3 |      560 | 2025-02-05 | Ninjas in Pyjamas | L   | 0.184      | -            | -                | -                | -         |    -3.80 | adamb, hampus, isak, L00m1, Plopski |
|            2 |      568 | 2025-02-05 | Passion UA        | L   | 0.183      | -            | -                | -                | -         |    -1.25 | adamb, hampus, isak, L00m1, Plopski |
|            1 |      684 | 2025-01-15 | Team Vitality     | L   | 0.045      | -            | -                | -                | -         |    -0.00 | adamb, hampus, isak, L00m1, Plopski |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
