### Roster Details<br />
Team Name: Ins (Polish team)<br />
Roster: ANeraX, Bambosh, hotd0g, pendzelek, sNx<br />
Global Rank: [184](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [110]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  584.7<br />
<br />
Final Rank Value (584.7) = Starting Rank Value (588.9) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.127[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 588.9
- 400 + ( ( 0.091 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 588.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1814 | 2024-10-27 | Illuminar Gaming       | L   | 0.116      | -            | -                | -                | -         |    -1.18 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            5 |     1828 | 2024-10-26 | GardenGarage           | L   | 0.110      | -            | -                | -                | -         |    -1.73 | ANeraX, Bambosh, hotd0g, pendzel, sNx   |
|            4 |     1831 | 2024-10-26 | Ex-ENTERPRISE esports  | L   | 0.109      | -            | -                | -                | -         |    -1.41 | ANeraX, Bambosh, hotd0g, pendzel, sNx   |
|            3 |     1990 | 2024-10-11 | 500 Rush               | W   | 0.011      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.15 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            2 |     1994 | 2024-10-11 | Betclic Apogee Esports | W   | 0.011      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.09 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            1 |     1999 | 2024-10-10 | Los kogutos            | L   | 0.004      | -            | -                | -                | -         |    -0.03 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($146.62)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.118 | $1,244.91      | $146.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
