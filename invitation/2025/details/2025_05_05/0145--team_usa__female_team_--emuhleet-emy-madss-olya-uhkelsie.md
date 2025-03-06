### Roster Details<br />
Team Name: Team USA (Female team)<br />
Roster: EMUHLEET, emy, madss, olya, uhKelsie<br />
Global Rank: [145](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [35]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  568.2<br />
<br />
Final Rank Value (568.2) = Starting Rank Value (568.9) + Head To Head Adjustments (-0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.014[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 568.9
- 400 + ( ( 0.078 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 568.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1487 | 2024-11-14 | Team Portugal (Female team)    | L   | 0.050      | -            | -                | -                | -         |    -0.53 | EMUHLEET, emy, madss, olya, uhKelsie |
|            4 |     1498 | 2024-11-14 | Team Poland (Female team)      | L   | 0.049      | -            | -                | -                | -         |    -0.42 | EMUHLEET, emy, madss, olya, uhKelsie |
|            3 |     1543 | 2024-11-12 | Team Netherlands (Female team) | W   | 0.037      | 0.557        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.037) |     0.33 | EMUHLEET, emy, madss, olya, uhKelsie |
|            2 |     1570 | 2024-11-11 | Team Portugal (Female team)    | L   | 0.031      | -            | -                | -                | -         |    -0.33 | EMUHLEET, emy, madss, olya, uhKelsie |
|            1 |     1580 | 2024-11-11 | Team Netherlands (Female team) | W   | 0.029      | 0.557        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.029) |     0.26 | EMUHLEET, emy, madss, olya, uhKelsie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($514.58)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.051 | $10,000.00     | $514.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
